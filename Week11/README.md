<!--
 * @Description:
 * @Autor: lida
 * @Date: 2020-11-27 13:57:18
 * @LastEditors: lida
 * @LastEditTime: 2021-02-11 10:51:54
 * @FilePath: \Frontend-07-Template\Week11\README.md
-->

重学 css
1 css2.1 总体规则
@charset
@import
rules
---@media
---@page
---@keyframes
---@fontface
---@supports
---@namespace
---@counter-style
---rule
------ selector : > + ~ <sp>
------ simple-selector : type \* . # : :: :not() []
------ key
------ value

2 全局变量 css
:root {
--red-color: red;
}

color: var(red-color)
3 css 函数
calc(), min(), max(), clamp(),toggle(),attr()

4 优先级计算方式
[1,1,1,1]
第一位：
第二位：id 选择器
第三位：class
第四位：元素

s = 1\* N^3 + 1*N^2 + 1*N^1 + 1\*N^0

5 伪类
:any-link
:link:visited === :any-link
:hover
:active
:focus
:target
树结构伪类
:empty
:nth-child()
:nth-last-child()
:first-child
:last-child
:only-child
逻辑型伪类
:not
:where
:has

6 伪元素
::before
::after
::first-line
::first-letter

::first-line 支持属性有：
color, font,background, word-spacing, letter-spacing,
text-decoration,text-transform, line-height

::first-letter 支持属性有：
color, font,background, word-spacing, letter-spacing,
text-decoration,text-transform, line-height,
float,vertical-align, margin,padding,border
