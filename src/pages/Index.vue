<template>
  <q-page
    class="full-height column wrap justify-center items-center content-center"
    ref="scrollContainer"
  >
    <div
      :class="[
        { current: currentSection === 0 },
        { 'show-next': showNextBlockIndex === 0 },
        { 'hide-next': hideNextBlockIndex === 0 },
        'column',
        'scroll-block'
      ]"
      id="div1"
      ref="div1"
    >
      <div class="col">
        <h1>current div {{ section }}</h1>
      </div>
      <div class="col">
        <h1>
          Quasar section div1
        </h1>
      </div>
      <div class="col">
        <h1>
          Quasar section div1
        </h1>
      </div>
      <div class="col">
        <h1>
          Quasar section div1
        </h1>
      </div>
    </div>
    <div
      :class="[
        { current: currentSection === 1 },
        { 'show-next': showNextBlockIndex === 1 },
        { 'hide-next': hideNextBlockIndex === 1 },
        'column',
        'scroll-block'
      ]"
      id="div2"
      ref="div2"
    >
      <div class="col">
        <h1>
          Quasar section div2
        </h1>
      </div>
      <div class="col">
        <h1>
          Quasar section div2
        </h1>
      </div>
      <div class="col">
        <h1>
          Quasar section div2
        </h1>
      </div>
      <div class="col">
        <h1>
          Quasar section div2
        </h1>
        <q-scroll-observer @scroll="debounceOnScroll" />
      </div>
    </div>

    <div
      :class="[
        { current: currentSection === 2 },
        { 'show-next': showNextBlockIndex === 2 },
        {
          'hide-next':
            hideNextBlockIndex >= 1 ||
            (showNextBlockIndex !== null && showNextBlockIndex < 2)
        },
        'column',
        'scroll-block'
      ]"
      id="div3"
      ref="div3"
    >
      <div class="col">
        <h1>
          Quasar section div3
        </h1>
      </div>
      <div class="col">
        <h1>
          Quasar section div3
        </h1>
      </div>
      <div class="col">
        <h1>
          Quasar section div3
        </h1>
      </div>
      <div class="col">
        <h1>
          Quasar section div3
        </h1>
      </div>
    </div>
  </q-page>
</template>

<script>
import { scroll, debounce } from "quasar";
import bus from "../utils/bus";
const { getScrollTarget, getScrollPosition, setScrollPosition } = scroll;

/***
 * section 是由路由传递过来的参数, 直接props获取, 用来标识希望跳转到哪个区域
 */

export default {
  props: { section: { type: String, required: false } },

  name: "PageIndex",
  mounted() {
    // 如果setTimeout 中的fn 不使用箭头函数那么无法访问到 this , 就需要将this 赋值提供给setTimeout的回调使用
    // let that = this;
    setTimeout(() => {
      this.scrollToSection(this.section);
      this._caculateHeight();
      console.log(this.scrollBlocksHeights);
    }, 20);
  },
  data() {
    return {
      currentSection: this.section ? this.section : 0, // section 是路由传递过来的props
      scrollInfo: {},
      scrollBlocksHeights: [],
      currentIndex: 0,
      showNextBlockIndex: null,
      hideNextBlockIndex: null

      // opacitySection1: 1,
      // opacitySection2: 1,
      // opacitySection3: 1,
    };
  },
  computed: {
    // currentSection()
    // {
    //   return this.section ? this.section : 'div1';
    // }
  },
  methods: {
    debounceOnScroll: function(info) {
      return debounce(this.onScroll(info), 500);
    },
    // scrollInfo 是quasar 提供的scroll信息 ,
    // 我们收集了滚动区域高度范围信息后, 就可以根据scroll信息来进行处理了
    onScroll: function(info) {
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
      let windowHeight = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight
      );
      let scrollBottom = this.scrollInfo.position + windowHeight;
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
          this.scrollInfo.position >= height1 - 300 &&
          this.scrollInfo.position < height2
        ) {
          this.currentIndex = i;
          // scrollBlocks[this.currentIndex].style.opacity = 1;
          let nextBlockIndex = this.currentIndex + 1;
          let nextBlock = scrollBlocks[nextBlockIndex];
          let nextBlockTopOffsetBottom = scrollBottom - height2;

          if (nextBlockTopOffsetBottom < windowHeight / 3) {
            let rate = nextBlockTopOffsetBottom / (windowHeight / 2);
            // console.log(rate);
            if (this.scrollInfo.direction === "up") {
              // hide next
              if (nextBlock) {
                // nextBlock.style.opacity =  rate - 0.5;
                // nextBlock.classList.add("hide-next");
                // this.sectionShow[nextBlockIndex] = false
                this.showNextBlockIndex = null;
                this.hideNextBlockIndex = nextBlockIndex;
              }
            } else if (this.scrollInfo.direction === "down") {
              // show next
              if (nextBlock) {
                // nextBlock.style.opacity = rate;
                // nextBlock.classList.add("show-next");
                this.showNextBlockIndex = nextBlockIndex;
                this.hideNextBlockIndex = null;

                // this.sectionShow[nextBlockIndex] = true
              }
            }
          }
          // 向上翻动, 则后面的逐渐不显示区域设置透明度半透明
          console.log(
            "scrollBottom - nextSectionTop:",
            nextBlockTopOffsetBottom
          );
        }
      }

      if (this.currentIndex !== prevIndex) {
        bus.$emit("indexChange", this.currentIndex);
      }

      console.log("scroll change index:" + this.currentIndex);
      console.log("hideNextBlockIndex:" + this.hideNextBlockIndex);
      console.log("showNextBlockIndex:" + this.showNextBlockIndex);
    },
    /***
     * 保存的是显示区块的高度范围数组
     *
     */
    _caculateHeight() {
      let scrollContainerHeight = this.$refs.scrollContainer.$el.clientHeight;

      let scrollBlocks = this.$refs.scrollContainer.$el.getElementsByClassName(
        "scroll-block"
      );

      let length = scrollBlocks.length;

      // 调整最后的一个显示区块, 当其高度不够的时候, 调整其高度为滚动区域可视高度
      // 一般在左右分屏的情况就需要处理这种高度不够的场景, 如果是顶部菜单, 下面内容区域的话, 就不需要

      // if (
      //   length > 1 &&
      //   scrollBlocks[length - 1].clientHeight < scrollContainerHeight
      // ) {
      //   scrollBlocks[length - 1].style.height = scrollContainerHeight + "px";
      // }

      let height = 0;

      this.scrollBlocksHeights.push(height);

      for (let i = 0; i < length; i++) {
        height += scrollBlocks[i].clientHeight;
        this.scrollBlocksHeights.push(height);
      }
    },

    scrollToSection(ref) {
      let section = this.section ? this.section : ref;
      this.currentIndex = section;
      if (!section) return;
      console.log("current section: " + section);
      let scrollBlocks = this.$refs.scrollContainer.$el.getElementsByClassName(
        "scroll-block"
      );
      let el = scrollBlocks[section];
      const target = getScrollTarget(el);
      const offset = el.offsetTop;
      const duration = 200;
      setScrollPosition(target, offset, duration);
    }
  },
  watch: {
    section() {
      this.currentSection = this.section ? this.section : "0";

      this.scrollToSection();
    }
  }
};
</script>

<style scoped>
.show-next {
  transform: translate(0px, 0px);
  opacity: 1;
}

.hide-next {
  transform: translate(-10px, -10px);
  opacity: 0;
}
.scroll-block {
  height: 800px;
  /*opacity: 1; */
  /*transition: 1000ms transform ease-in-out, 1000ms opacity ease-in-out;*/
  transition: 500ms opacity ease-in-out, 500ms transform ease-in-out;
}
</style>
