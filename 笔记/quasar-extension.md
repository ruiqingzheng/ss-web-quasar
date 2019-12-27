
https://quasar.dev/app-extensions/development-guide/introduction
https://github.com/quasarframework/app-extension-examples

1. 创建my-ext 将新建extention目录结构
quasar create my-ext --kit app-extension

2. 按官方示例实现directive

https://github.com/quasarframework/app-extension-examples/tree/master/my-directive

3. 在项目目录安装我们新建的包

 yarn add --dev file://path/to/our/app/ext/root
 
 quasar ext invoke my-ext
 
 
 安装后node_modules 会有我们创建的包, 一般名字是类似 quasar-app-extension-scrollanimation
 devServer: {
   watchOptions: {
     ignored: [
       'node_modules',
 
       // be sure to change <myextid> below to
       // your App Extension name:
       '!node_modules/quasar-app-extension-<myextid>'
     ]
   }
 }
 
 
 4. Index script
 
 ```bash

$ cd /path/to/app/extension/folder

# we register the extension through yarn
$ yarn link

$ cd /path/to/quasar/testing/app/folder

$ yarn link quasar-app-extension-<ext-id>
# in our demo case, it's this:
# $ yarn link quasar-app-extension-my-ext
```
5. 安装和卸载

```s

$ cd /path/to/app/extension/folder

# run yarn/npm command (install/uninstall, etc)

# then

$ cd /path/to/quasar/testing/app/folder

# Uninstall the app ext
$ quasar ext uninvoke my-ext

# Re-install the app ext
$ quasar ext invoke my-ext
```
