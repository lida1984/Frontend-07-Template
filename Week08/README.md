<!--
 * @Description:
 * @Autor: lida
 * @Date: 2020-11-27 13:57:18
 * @LastEditors: lida
 * @LastEditTime: 2021-01-19 09:38:43
 * @FilePath: \Frontend-07-Template\Week08\README.md
-->

# 浏览器工作原理 1

## 1 最后生成的是位图（bitmap）,被操作系统或硬件来显示

## 2 有限状态机

每个状态都是一个机器，可以做计算、存储、输出
所有机器输入是一致的
状态机是纯函数
每个机器都知道下一个状态
状态模式

## 协议解析

应用层、表示层、会话层 ---- HTTP (requie('http'))
传输层 ---- TCP （require('net')）
网络层 ---- Internet
数据链路层、物理层 ---- 4G/5G/WI-FI
如： host ip 来自 ip 层
port 端口来自 TCP 层
