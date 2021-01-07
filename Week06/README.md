<!--
 * @Description: 重学 js 一
 * @Autor: lida
 * @Date: 2020-11-27 13:57:18
 * @LastEditors: lida
 * @LastEditTime: 2021-01-06 15:38:06
 * @FilePath: \Frontend-07-Template\Week06\README.md
-->

## 1 形式语言：标准定义格式

乔布斯基谱系

## 2 产生式

产生式：在计算机中指 Tiger 编译器将源程序经过词法分析（Lexical Analysis）和语法分析（Syntax Analysis）后得到的一系列符合文法规则（Backus-Naur Form，BNF）的语句
巴科斯诺尔范式：即巴科斯范式（英语：Backus Normal Form，缩写为 BNF）是一种用于表示上下文无关文法的语言，上下文无关文法描述了一类形式语言。它是由约翰·巴科斯（John Backus）和彼得·诺尔（Peter Naur）首先引入的用来描述计算机语言语法的符号集。
终结符： 最终在代码中出现的字符

## 3 编程语言的特性

图灵完备性：在可计算性理论里，如果一系列操作数据的规则（如指令集、编程语言、细胞自动机）可以用来模拟单带图灵机，那么它是图灵完全的。这个词源于引入图灵机概念的数学家艾伦·图灵。虽然图灵机会受到储存能力的物理限制，图灵完全性通常指“具有无限存储能力的通用物理机器或编程语言”。

图灵机（Turing machine）：又称确定型图灵机，是英国数学家艾伦·图灵于 1936 年提出的一种将人的计算行为抽象掉的数学逻辑机，其更抽象的意义为一种计算模型，可以看作等价于任何有限逻辑数学过程的终极强大逻辑机器。

静态和动态语言： https://www.cnblogs.com/raind/p/8551791.html

强类型： 无隐式转换

弱类型： 有隐式转换 (Number + String 、 String == Boolean)

协变与逆变： https://jkchao.github.io/typescript-book-chinese/tips/covarianceAndContravariance.html

## 4 Number

二进制转十进制例子： 1000 => 1 \* 2^3 + 0 \* 2^2 + 0 \* 2^1 + 0 \* 2^0 = 8
双精度浮点数：用 1 个符号位、11 个指数位、52 个精度位表示（64 位）。
单精度浮点数：用 1 个符号位、8 个指数位、23 个精度位表示（32 位）。
科学计数法的形式如：19971400000000=1.99714×10^13=1.99714e13 。
指数位存储科学计数法中的指数部分，如 13
11 个指数位有个基准值为 10000000000 ； 比这个大为正，否则为负。

## 5 String

1 字符集
字符：指类字形单位或符号，包括字母、数字、运算符号、标点符号和其他符号，以及一些功能性符号。字符是电子计算机或无线电通信中字母、数字、符号的统称，其是数据结构中最小的数据存取单位，通常由 8 个二进制位(一个字节)来表示一个字符。
字符是计算机中经常用到的二进制编码形式，也是计算机中最常用到的信息形式。
在 ASCII 编码中，一个英文字母字符存储需要 1 个字节。
在 GB 2312 编码或 GBK 编码中，一个汉字字符存储需要 2 个字节。
在 UTF-8 编码中，一个英文字母字符存储需要 1 个字节，一个汉字字符储存需要 3 到 4 个字节。在 UTF-16 编码中，一个英文字母字符或一个汉字字符存储都需要 2 个字节（Unicode 扩展区的一些汉字存储需要 4 个字节）。
在 UTF-32 编码中，世界上任何字符的存储都需要 4 个字节

代码点（Code Point）：在 Unicode 代码空间中的一个值，取值 0x0 至 0x10FFFF，代表一个字符。

代码单元（Code Unit）：在具体编码形式中的最小单位。比如 UTF-16 中一个 code unit 为 16 bits，UTF-8 中一个 code unit 为 8 bits。一个 code point 可能由一个或多个 code unit(s) 表示。在 U+10000 之前的 code point 可以由一个 UTF-16 code unit 表示，U+10000 及之后的 code point 要由两个 UTF-16 code units 表示

编码方式：
AscII 127 个字符 , 7 位编码, 编码范围是 0x00-0x7F
B2312 是基于区位码设计的，区位码把编码表分为 94 个区，每个区对应 94 个位，每个字符的区号和位号组合起来就是该汉字的区位码。
unicode 字符数量比较大
utf8 默认表示一个字符占用一个字节(8bit)

2 语法
"" '' ``
特殊符号： bfnrtv
换行符：2028 2029

## 6 undefined

let un = void 0

## 7 对象的基础知识

对象三要素： 明确标识性、有状态、有行为。
分类 Class：分类思想
原型 Prototype : 定义原型，只描述本身与原型的区别
设计对象的状态和行为时，遵循“行为改变状态”的原则

## 8 js 对象

1 {} . [] Object.defineProperty
基本方法 api
2 Object.create / Object.serPrototypeOf / Object.getPrototypeOf
基于原型的方法 api
3 new / class / extends
基于分类的方式 api
4 new / function / prototype
