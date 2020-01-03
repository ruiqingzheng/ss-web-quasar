# intersection 

看前端笔记intersection , 项目中用的方法是结合vue 使用指令

后来发现quasar 已经有了intersection的指令, 于是尝试quasar的指令,使用后发现它不能对动态刷新的组件进行正常判断

比如

原本准备参考quasar文档中的例子来实现动态css 来实现需要的效果

feature 组件下面是cards 高度是动态渲染后才有实际高度 , 

这时在cards 的父容器中使用quasar的intersection指令就无法正常获取到正确的intersectionRatio

下面代码就是文档中的例子, 实际测试也是正常的, 但是如果内容是动态生成的那么就无法实现需要的效果, 比如根据percent动态设置opacity

https://quasar.dev/vue-directives/intersection#Intersection-API

而原先的自定义的指令是利用动画, 则可以基本正常

所以暂时只能使用原本的自定义指令以quasar扩展的方式来实现需要的动态效果


```vue
<template>
  <div class="relative-position">
    <div
      class="example-state rounded-borders text-center absolute-top q-mt-md q-ml-md q-mr-lg text-white"
      :class="visibleClass"
    >
      Percent: {{ percent }}%
    </div>

    <div class="example-area q-pa-lg scroll">
      <div class="example-filler" />

      <div v-intersection="options" class="example-observed flex flex-center rounded-borders">
        Observed Element
      </div>

      <div class="example-filler" />
    </div>
  </div>
</template>

<script>
  const thresholds = []
  for (let i = 0; i <= 1.0; i += 0.01) {
    thresholds.push(i)
  }

  export default {
    data () {
      return {
        percent: 0,

        options: {
          handler: this.onIntersection,
          cfg: {
            threshold: thresholds
          }
        }
      }
    },

    computed: {
      visibleClass () {
        return `bg-${this.percent > 0 ? 'positive' : 'negative'}`
      }
    },

    methods: {
      onIntersection (entry) {
        const percent = (entry.intersectionRatio * 100).toFixed(0)
        if (this.percent !== percent) {
          this.percent = percent
        }
      }
    }
  }
</script>

<style lang="sass" scoped>
  .example-state
    background: #ccc
    font-size: 20px
    color: #282a37
    padding: 10px
    opacity: 0.8

  .example-observed
    height: 150px
    font-size: 20px
    color: #ccc
    background: #282a37
    padding: 10px

  .example-area
    height: 300px

  .example-filler
    height: 500px
</style>

```


