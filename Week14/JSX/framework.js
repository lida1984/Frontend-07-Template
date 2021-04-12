/*
 * @Description:
 * @Autor: lida
 * @Date: 2021-03-11 20:49:26
 * @LastEditors: lida
 * @LastEditTime: 2021-03-15 20:11:35
 * @FilePath: \Frontend-07-Template\Week14\JSX\framework.js
 */

export function createElement(type, attributes, ...children) {
  let element
  if (typeof type === 'string') {
    element = new ElementWrapper(type)
  } else {
    element = new type()
  }

  for (let name in attributes) {
    element.setAttribute(name, attributes[name])
  }
  for (let child of children) {
    if (typeof child === 'string') {
      child = new TextWrapper(child)
    }
    element.appendChild(child)
  }
  return element
}
export class Component {
  setAttribute(name, value) {
    this.root.setAttribute(name, value)
  }
  appendChild(child) {
    child.mountTo(this.root)
  }
  mountTo(parent) {
    parent.appendChild(this.root)
  }
}
class ElementWrapper extends Component {
  constructor(type) {
    super()
    this.root = document.createElement(type)
  }
}
class TextWrapper extends Component {
  constructor(content) {
    super()
    this.root = document.createTextNode(content)
  }
}
