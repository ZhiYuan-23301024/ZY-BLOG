---
title: linux
tags:
categories:
  - 云相关和运维
---
- apt包管理工具
```bash
# 1. 查看可用发行版
wsl -l -o
# 输出：Ubuntu, Debian, Ubuntu-24.04, ...

# 2. 安装Ubuntu 24.04
wsl --install -d Ubuntu-24.04

# 3. 设置密码（首次启动时）

# 4. 设为默认发行版
wsl --set-default Ubuntu-24.04

# 5. 验证
wsl -l -v
# 输出：
#   NAME            STATE      VERSION
# * Ubuntu-24.04    Running    2
#   Ubuntu          Stopped    2

```

迁移wsl
```
wsl --manage <发行版名称> --move <目标路径>
```