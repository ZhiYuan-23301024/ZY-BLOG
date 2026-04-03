import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/ZY-BLOG/",

  lang: "zh-CN",
  title: "ZhiYuan的随笔",
  description: "ZhiYuan 的个人博客",

  theme,
  // 自定义标签页图标
  head: [
    ["link", { rel: "icon", href: "/assets/images/logo.jpg" }],
  ],
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
