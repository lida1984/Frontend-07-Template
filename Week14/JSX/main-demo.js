/*
 * @Description:
 * @Autor: lida
 * @Date: 2021-03-11 20:07:08
 * @LastEditors: lida
 * @LastEditTime: 2021-03-20 09:49:18
 * @FilePath: \Frontend-07-Template\Week14\JSX\main.js
 */
import { createElement } from './framework'
import { Carousel } from './carousel'
import { Timeline, Animation } from './animation'
const arr = [1, 2, 3]
let a = <Carousel id="main" src={arr}></Carousel>

// document.body.appendChild(a)
a.mountTo(document.body)
let tl = new Timeline()
// window.tl = tl
// window.animation = new Animation(
//   {},
//   'a',
//   0,
//   100,
//   1000,
//   null,
//   (v) => `translateX: ${v}px`
// )
tl.add(
  new Animation(
    document.getElementById('el').style,
    'transform',
    0,
    500,
    2000,
    1000,
    null,
    (v) => `translateX(${v}px)`
  )
)
tl.start()
document.getElementById('stop').onclick = function () {
  tl.pause()
}
document.getElementById('resume').onclick = function () {
  tl.resume()
}
