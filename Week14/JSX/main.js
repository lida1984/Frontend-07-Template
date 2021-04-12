/*
 * @Description:
 * @Autor: lida
 * @Date: 2021-03-11 20:07:08
 * @LastEditors: lida
 * @LastEditTime: 2021-03-29 15:03:12
 * @FilePath: \Frontend-07-Template\Week14\JSX\main.js
 */
import { createElement } from './framework'
import { Carousel } from './carousel'
const arr = [1, 2, 3]
let a = <Carousel id="main" src={arr}></Carousel>

// document.body.appendChild(a)
a.mountTo(document.body)
