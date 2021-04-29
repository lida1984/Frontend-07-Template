<!--
 * @Description:
 * @Autor: lida
 * @Date: 2020-11-27 13:57:18
 * @LastEditors: lida
 * @LastEditTime: 2021-04-28 19:56:03
 * @FilePath: \Frontend-07-Template\Week20\README.md
-->

# git hooks

.git 文件夹下面 hooks：
pre-commit.sample : 提交前操作
pre-push.sample : push 前操作

增加 pre-commit 文件, 此文件为可执行文件， 当 git commit 时候就可以自动执行
增加 pre-push 文件, 此文件为可执行文件， 当 git push 时候就可以自动执行

# 在 hooks 里面可以使用 eslint

阻止提交使用 require('process').exitCode = 1

# 无头浏览器检查 DOM (DOM 单元测试)

使用插件 puppeteer
