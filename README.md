# [vue3-starry-sky](https://www.npmjs.com/package/vue3-starry-sky)

# 组件下载

```
npm i vue3-starry-sky
```

# 组件效果预览

* [gitee pages](https://zero-dg.gitee.io/vue3-starry-sky)
* [github pages](https://zero-dg.github.io/vue3-starry-sky/)

# 全局使用方法

在vue3项目中全局引用的方式
``` ts
//main.ts or main.js
import { createApp } from 'vue';
import App from './App.vue';
import Vue3StarrySky from 'vue3-starry-sky';
import 'vue3-starry-sky/lib/style.css';

const app = createApp(App);

app.use(Vue3StarrySky);
app.mount('#app');
```
如果使用ts+vite的方式，需要在env.d.ts中加入最后一句声明，否则ts会检测报错。
``` ts
/// <reference types="vite/client" />
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'vue3-starry-sky';
```
组件内使用
``` html
<script setup></script>

<template>
	<starry-sky :stars-count="1000" :distance="1000" />
</template>

<style></style>
```

# 局部引用方法

示例：
``` html
<script setup>
import { StarrySky } from '../packages/index';
</script>

<template>
	<starry-sky :stars-count="1000" :distance="1000" />
</template>

<style></style>
```

# 参数说明

|  属性   | 类型  | 默认值  |
|  ----  | ----  | ----  |
| stars-count  | Number | 800 |
| distance  | Number | 800 |

# 源码地址

* gitee地址：[vue3-starry-sky](https://gitee.com/zero-dg/vue3-starry-sky)
* github地址：[vue3-starry-sky](https://github.com/ZERO-DG/vue3-starry-sky)

# 相关（[vue-starry-sky](https://www.npmjs.com/package/vue-starry-sky)）

本项目基于vite+vue3基于之前的cli+vue2升级改造而来，想访问vue2库组件请点击下面链接地址：
* gitee地址：[vue-starry-sky](https://gitee.com/zero-dg/vue-starry-sky)
* github地址：[vue-starry-sky](https://github.com/ZERO-DG/vue-starry-sky)
