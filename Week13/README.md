<!--
 * @Description:
 * @Autor: lida
 * @Date: 2020-11-27 13:57:18
 * @LastEditors: lida
 * @LastEditTime: 2021-03-04 09:17:45
 * @FilePath: \Frontend-07-Template\Week13\README.md
-->

## html

了解 DTD
了解 namespace

## 语义标签

## domApi

## 事件 Api

## rangeApi

关于 node 节点操作
例子：将子元素倒序排列
使用 appendChild： 是一个 living collection；会自动先 remove 掉子元素 然后 append 到父 node 上

1 定义
const range = new Range()
2 选取
range.setStart(element, 偏移量)
range.setEnd(element, 偏移量)
range.setStartBefore()
range.setEndBefore()
range.setStartAfter()
range.setEndAfter()
range.selectNode() // 选中一个 node
range.selectNodeContents() // 选中 node 的内容
3 操作
range.extractContents() // 从 dom 树中摘取 node 节点, dom 树将删除该 node 节点
range.insertNode() // 插入 node

## CSSOM

1 document.styleSheets 对象
属性： cssRules、ownerNode
可直接修改属性的样式
2 window.getComputedStyle(element, 可选伪元素) 方法

## CSSOM view

layout 相关 api
getClientRects() // 获取元素生成的所有盒子
getBoundingClientRect() // 获取当前元素的总盒子

## 标准化组织

1 khronos : webGL openGL
2 ecma
3 w3c: webaudio
4 whatwg: html
