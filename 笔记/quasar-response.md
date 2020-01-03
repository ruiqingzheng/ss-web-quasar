# quasar response

参考: 

响应式布局很重要, 这两个文档需要仔细看, 其实内容不多

https://quasar.dev/layout/grid/introduction-to-flexbox 

https://quasar.dev/style/visibility#Window-Width-Related

响应式布局, 这个和vuetify 是很类似的, 几乎可以说是一样的 ,  类名都几乎是一样, 而且类名也兼容bootstrap

0. 在组件的css 中依然使用meida query 来调整, 比如针对字体和间距, 这些在每个组件中用media query 来调整还是很方便的

1. 栅格系统, 针对不同的屏幕, 用类名来表示html元素在不同的屏幕下的宽度, 比如

"col-xs-12 col-sm-6 col-md-4"

2. 是否可见, 有时不仅是针对不同屏幕宽度不同, 还有可见性的不同, 比如某个元素只在手机上显示

那么它的类名就类似:

gt-md:  只在中等屏幕以上, lg, xl , 才显示该元素
lt-md:  只在sm 和 xs 屏幕才显示该元素


不仅可以用, gt- , lt-  这样的前缀来表示, 如果觉得这样不够语义化


quasar 中还有其他的类名, 比如

desktop-only , mobile-only, native-mobile-only 等等屏幕才显示

某些屏幕则隐藏 desktop-hide, mobile-hide, native-mobile-hide 等

具体的参考上面的两个链接 

## Responsive Design

Quasar Flex CSS classes can be applied based on the width of the screen, to help you in making a responsive UI. The 12 points grid is inspired by Bootstrap’s, so there are a lot of similarities.

What we’ve learned so far is that, for example, we can size the columns regardless of window width. If we are to create a responsive UI, we need to dynamically change the sizing while taking window width into account. First, let’s learn about some tokens that you can inject in middle of `col-*`, `offset-*` and `col-auto` helper classes (look at table below for tokens).

| Token | Max window width | Description / When it applies |
| :---- | :--------------- | :---------------------------- |
| `xs`  | 599px            | Extra small sized window      |
| `sm`  | 1023px           | Small sized window            |
| `md`  | 1439px           | Medium-sized window           |
| `lg`  | 1919px           | Large sized window            |
| `xl`  | Infinite         | Extra large sized window      |

Example: `col-md-7`, `offset-lg-3`, `col-xs-auto`.

A full example: let’s say we have a row with three children. In extra small windows, we need to stack the children vertically, In small windows we need to display them side by side (each having equal width), and starting with medium windows we should display them all on same line:

```html
<div class="row">
  <div class="col-xs-12 col-sm-6 col-md-4">
    col
  </div>
  <div class="col-xs-12 col-sm-6 col-md-4">
    col
  </div>
  <div class="col-xs-12 col-sm-6 col-md-4">
    col
  </div>
</div>
```

Notice in the above example that we used `col-xs-12` (12/12 = 100% of row, so each child will take full width of the container making all children stack vertically, since rows wrap content by default), `col-sm-6` (6/12 = 50% of row) and `col-md-4` (4/12 = 33% of row).

Like previously mentioned, rows wrap content by default, so when 12 (or more) grid points are used for a row, content is wrapped to the next line. If we have two ``s and we use `col-8` on both, they will also stack, since 8 + 8 = 16 and we can only display 12 points on a single line.

```html
<div class="row">
  <!--
    more than 12 grid points together,
    so second <div> will wrap on next line
  -->
  <div class="col-8">col</div>
  <div class="col-8">col</div>
</div>
```

Also check [Visibility](https://quasar.dev/style/visibility#Window-Width-Related) Style page to see thresholds on window width and these tokens (xs, sm, md, lg, xl) used on their own to hide or show DOM elements.
