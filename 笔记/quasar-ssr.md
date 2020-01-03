# ssr

文档

[配置ssr](!https://quasar.dev/quasar-cli/developing-ssr/configuring-ssr)
[pwa ssr](!https://quasar.dev/quasar-cli/developing-ssr/ssr-with-pwa)

 PWA or SSR is simply determined by the “mode” parameter in “quasar dev” and “quasar build” commands.
 
1. 添加ssr模块

  quasar mode add ssr


2. 调试ssr模块

  quasar dev -m ssr
  
  
3. 配置文件

```js
// quasar.conf.js
return {
  // ...
  ssr: {
    pwa: true
  }
}
``` 
  
  
