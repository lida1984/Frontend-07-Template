<!--
 * @Description: css2
 * @Autor: lida
 * @Date: 2020-11-27 13:57:18
 * @LastEditors: lida
 * @LastEditTime: 2021-02-24 10:53:27
 * @FilePath: \Frontend-07-Template\Week12\README.md
-->

# 1 盒模型

# 2 正常流排版

line-top
text-top
base-line
text-bottom
line-bottom

## 行排版

display: inline-block 与文本基线对齐的方式有多种：vertical-align (top/bottom/text-top/text-bottom)

## 块排版

margin collapse 合并问题只在正常流(BFC)中

## 概念

Block Formatting Contexts (BFC，块级格式化上下文)，就是 一个块级元素 的渲染显示规则。通俗一点讲，可以把 BFC 理解为一个封闭的大箱子，，容器里面的子元素不会影响到外面的元素，反之也如此。
BFC 的布局规则如下：
  1 内部的盒子会在垂直方向，一个个地放置；
  2 BFC 是页面上的一个隔离的独立容器；
  3 属于同一个 BFC 的 两个相邻 Box 的 上下 margin 会发生重叠 ；
  4 计算 BFC 的高度时，浮动元素也参与计算
  5 每个元素的左边，与包含的盒子的左边相接触，即使存在浮动也是如此；
  6 BFC 的区域不会与 float 重叠；
只要元素满足下面任一条件即可触发 BFC 特性：
body 根元素；
浮动元素：float 不为 none 的属性值(left right)；
绝对定位元素：position (absolute、fixed)
display 为： inline-block、inline-flex/grid、table、table-cells、flex、grid
overflow 除了 visible 以外的值 (hidden、auto、scroll、overlay)

IFC 布局规则：
1 框会从包含块的顶部开始，一个接一个地水平摆放。
2 摆放这些框时，它们在水平方向的 内外边距+边框 所占用的空间都会被考虑；
  在垂直方向上，这些框可能会以不同形式来对齐：它们可能会把底部或顶部对齐，也可能把其内部的文本基线对齐。能把在一行上的框都完全包含进去的一个矩形区域，被称为该行的行框。
  水平的 margin、padding、border 有效，垂直无效。不能指定宽高;

3 行框的宽度是 由包含块和存在的浮动来决定;
  行框的高度 由行高来决定
影响 IFC 布局的属性：
font-size
line-height
height
vertical-aligin

# BFC 合并

Block Container: 里面有 BFC 的, 包含正常流
有：
display: block/inline-block/table-cell/table-caption
flex item / grid cell
Block-level Box: 外面有 BFC 的
有：
display: block/flex/table/grid
Block Box : = 上面之和

## 动画

animation timing-function 主要应用贝塞尔曲线

## 颜色 color

RGB 和 HSL

## 绘制

1 几何图形
border box-shadaw border-raduis
2 文字
font text-decoration
3 位图
background-image

4 图形格式算法：data uri +svg
data:image/svg+xml
