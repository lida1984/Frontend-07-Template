/*
 * @Description:
 * @Autor: lida
 * @Date: 2021-03-18 19:14:09
 * @LastEditors: lida
 * @LastEditTime: 2021-03-29 15:45:41
 * @FilePath: \Frontend-07-Template\Week14\JSX\carousel.js
 */
import { Component } from './framework'
import { enableGesture } from '../../Week15/gesture'
import { Timeline, Animation } from './animation'
import { ease } from './ease'
export class Carousel extends Component {
  constructor() {
    super()
    this.attributes = Object.create(null)
  }
  setAttribute(name, value) {
    this.attributes[name] = value
  }
  render() {
    console.log(this.attributes)
    this.root = document.createElement('div')
    this.root.classList.add('clssname-div')
    for (let val of this.attributes.src) {
      let child = document.createElement('div')
      child.innerHTML = val
      this.root.appendChild(child)
    }
    enableGesture(this.root)
    let children = this.root.children
    let position = 0

    // 写 gesture
    this.root.addEventListener('pan', (event) => {
      let x = event.clientX - event.startX
      let current = position - (x - (x % 200) / 200)
      for (let offset of [-1, 0, 1]) {
        let pos = current + offset
        pos = Math.round(
          ((pos % children.length) + children.length) % children.length
        )
        children[pos].style.transition = 'none'
        children[pos].style.transform = `translateX(${-pos * 200 + offset}px)`
      }
    })
    /*
    // 简单鼠标
    this.root.addEventListener('mousedown', (event) => {
      // 鼠标监听事件，拖动
      let startX = event.clientX
      let move = (event) => {
        let x = event.clientX - startX
        for (let child of children) {
          child.style.transition = 'none'
          child.style.transform = `translateX(${-position * 200 + x}px)`
        }
      }
      let up = (event) => {
        let x = event.clientX - startX
        position = position - Math.round(x / 200)
        for (let child of children) {
          child.style.transition = ''
          child.style.transform = `translateX(${-position * 200}px)`
        }
        document.removeEventListener('mousemove', move)
        document.removeEventListener('mouseup', up)
      }
      document.addEventListener('mousemove', move)
      document.addEventListener('mouseup', up)
    })
    */
    // let cur = 0
    // setInterval(() => {
    //   // 自动滚动
    //   let children = this.root.children
    //   ++cur
    //   cur = cur % children.length
    //   for (let child of children) {
    //     child.style.transform = `translateX(-${cur * 100}%)`
    //   }
    // }, 2000)
    return this.root
  }
  mountTo(parent) {
    parent.appendChild(this.render())
  }
}
