
# 笔记

scroll 时对显示区域进行透明度的改变 , 效果是, 当从页面最下面向上滚动时, 下面的区域在不显示之前进行透明度和动画


## 思路

scrollBottom 的值是scrollTop + 可视区域高度, 它是个变化的值

       let scrollBottom = this.scrollInfo.position + document.documentElement.clientHeight - 200;

而滚动内容区域的顶部位置, 是固定的值

let scrollBlocks = this.$refs.scrollContainer.$el.getElementsByClassName(
        "scroll-block"
      );

我们判断滚动区域的顶部位置是否触及到scrollBottom , 当

内容区域顶部位置 - scrollBottom = 0  那么该内容区块正好被底部遮住

scrollBottom - 内容区域顶部位置 > 0 显示内容区域

scrollBottom - 内容区域顶部位置 < 0 内容区域在下面超出未显示

动画的时机是, 下一个内容区域的顶部部分显示的时候, 比如 显示了500px

如果从下向上滑动, 也就是要让刚才的下个内容区域消失

如果从上向下滑动, 也就是从当前区域滚动到下个区域, 那么就需要让下个内容区域显示出来

然后在下面的代码上包裹debounce方法


## 代码 

```js


    debounceOnScroll: function (info) {
      return debounce(this.onScroll(info), 500)
    },
    // scrollInfo 是quasar 提供的scroll信息 ,
    // 我们收集了滚动区域高度范围信息后, 就可以根据scroll信息来进行处理了
    onScroll: function (info){
      this.scrollInfo = info;
      console.log(
        "scroll position : ",
        this.scrollInfo,
        "scrollTop:",
        this.$refs.scrollContainer.$el.scrollTop
      );

      let prevIndex = this.currentIndex;

      let scrollBlocks = this.$refs.scrollContainer.$el.getElementsByClassName(
        "scroll-block"
      );

      // let scrollContainerHeight = this.$refs.scrollContainer.$el.clientHeight;
      let windowHeight = Math.max(document.documentElement.clientHeight,
        window.innerHeight
      );
      let scrollBottom =
        this.scrollInfo.position + windowHeight;
      console.log("scrollBottom: " + scrollBottom);
      console.log("BlocksHeights" + this.scrollBlocksHeights);

      // 根据滚动区域来设置当前菜单项 , 非父子组件通信, 通过一个vue对象来进行事件处理

      for (let i = 0; i < this.scrollBlocksHeights.length - 1; i++) {
        let height1 = this.scrollBlocksHeights[i]; // current section top
        let height2 = this.scrollBlocksHeights[i + 1]; // current section bottom , next section top
        // 这里判断是否是当前区块的时候, 并不需要让scroll的位置完全超过内容的offset ,
        // 那样的话, 比如最后的一个内容区域已经在屏幕中显示, 但是因为scroll位置没有超过内容的offset ,
        // 于是会导致index 没有正确切换赋值
        // 所以这里改成 scroll顶部和内容的顶部 还差顶部300 个像素就认为, 已经是在显示了下个区块
        if (
          this.scrollInfo.position >= height1 - 300  &&
          this.scrollInfo.position < height2
        ) {
          this.currentIndex = i;
          scrollBlocks[this.currentIndex].style.opacity = 1;
          let nextBlock = scrollBlocks[this.currentIndex + 1];
          let nextBlockTopOffsetBottom = scrollBottom - height2;

          if(nextBlockTopOffsetBottom < 500) {

            let rate = (nextBlockTopOffsetBottom) / 500;
            // console.log(rate);
            if(this.scrollInfo.direction === "up") {
              // hide next
              if (nextBlock)
                nextBlock.style.opacity =
                  1 - rate
            }else if (this.scrollInfo.direction === "down") {
              // show next
              if (nextBlock)
                nextBlock.style.opacity =
                  rate
            }
          }
          // 向上翻动, 则后面的逐渐不显示区域设置透明度半透明
          console.log("scrollBottom - nextSectionTop:", nextBlockTopOffsetBottom);
        }
      }

      if (this.currentIndex !== prevIndex) {
        bus.$emit("indexChange", this.currentIndex);
      }

      console.log("scroll change index:" + this.currentIndex);
    },

```
  
  
## faq

内容在滚动的时候, 需要知道具体是对应的哪个菜单项,

判断的时候有两种方法

1. 判断滚动条的位置是否位于, 内容高度范围之间
2. 就是 判断哪个区域的 offsetTop 和滚动条的位置,最接近

第一种方式会存在误差,比如页面已经在显示最后一个区块, 但是高度不够, 于是屏幕主体已经显示的是最后一个内容块, 但菜单项没有正确设置

以前的解决方法是, 最后一个内容区块如果高度不够那么就手动去设置高度, 左右分屏这个样做是挺正常的

但是有的时候, 这样做就影响了界面 是不能这么做的 , 所以我们可以把判断范围的顶部缩小一下即可

另外如果是 scrollTop 来判断就不存在这个问题

```js
for (let i = 0; i < this.scrollBlocksHeights.length - 1; i++) {
        let height1 = this.scrollBlocksHeights[i]; // current section top
        let height2 = this.scrollBlocksHeights[i + 1]; // current section bottom , next section top
        // 这里判断是否是当前区块的时候, 并不需要让scroll的位置完全超过内容的offset ,
        // 那样的话, 比如最后的一个内容区域已经在屏幕中显示, 但是因为scroll位置没有超过内容的offset ,
        // 于是会导致index 没有正确切换赋值
        // 所以这里改成 scroll顶部和内容的顶部 还差顶部300 个像素就认为, 已经是在显示了下个区块
        if (
          this.scrollInfo.position >= height1 - 300  &&
          this.scrollInfo.position < height2
        )

```
