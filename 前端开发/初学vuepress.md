---
title: 初学vuepress
date: 2025-10-13
tags:
  - Vue
categories:
  - 前端开发
---
## 在md中使用vue语法

路由会根据你的 Markdown 文件的相对路径来自动生成。每个 Markdown 文件都通过 [markdown-it](https://github.com/markdown-it/markdown-it) 编译为 HTML ，然后将其作为 Vue 组件的模板。因此，==你可以在 Markdown 文件中直接使用 Vue 语法，便于你嵌入一些动态内容

例如这个md文件
```markdown
# 关于我们

这是一个用 Markdown 写的页面！

## 我们的特色
- **简单易用**
- **功能强大**

<!-- 你甚至可以在 Markdown 里使用 Vue 的模板语法 -->
<div class="dynamic-content">
  <p>当前计数是: {{ count }}</p>
  <button @click="count++">点我加1</button>
</div>

<script setup>
import { ref } from 'vue'
// 这里的脚本会像在 .vue 文件的 <script setup> 里一样执行
const count = ref(0)
</script>

<style scoped>
.dynamic-content {
  color: blue;
}
</style>
```

经过中间转换以后会以这种形式嵌入vue模板里
```vue
<template>
  <!-- Markdown 内容被转换为 HTML 并嵌入 -->
  <h1>关于我们</h1>
  <p>这是一个用 Markdown 写的页面！</p>
  <h2>我们的特色</h2>
  <ul>
    <li><strong>简单易用</strong></li>
    <li><strong>功能强大</strong></li>
  </ul>
  <!-- 您嵌入的 Vue 模板语法被原样保留，并成为 Vue 模板的一部分 -->
  <div class="dynamic-content">
    <p>当前计数是: {{ count }}</p>
    <button @click="count++">点我加1</button>
  </div>
</template>

<script setup>
// Markdown 文件中的 <script setup> 块被完整地移到这里
import { ref } from 'vue'
const count = ref(0)
</script>

<style scoped>
/* Markdown 文件中的 <style scoped> 块被完整地移到这里 */
.dynamic-content {
  color: blue;
}
</style>
```
