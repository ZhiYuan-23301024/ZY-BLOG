---
title: 如何进行git合作（简略版）
categories:
  - 杂项
tags:
  - git
date: 2025-11-05
---
## 云端建库

- 在云端master分支创建一个initial结点，节点内容为配置和环境文件
- 从该节点分叉一条dev分支
- 从dev分支分叉出若干feature

## 开发

假设我负责feature/A分支

>加个feature/A是为了方便持续集成工具识别
>不说云端的时候默认是本地

- 先克隆项目下来，切换到feature/A分支后，在feature/A分支分一个自己的工作分支叫zhr
- zhr开发完以后在zhr先做提交，接着更新feature/A，然后将zhr变基到feature/A上面去
- 然后提交zhr到云端zhr
- 在云端发起一个zhr->feature/A的pr (pull request)
- 管理员审核pr，合并pr以后删除这个云端zhr分支

>为了方便管理，云端尽量只有dev master 和feature分支，云端zhr分支是一个临时云端分支，用来发pr用的

## 其它

- 每隔一周feature向dev合并一次
- 小的功能点只在feature提交

>某团队一个月合并一次，管理员已经似了，提交记录非常丑陋

![](./assets/file-20251105114804213.png)