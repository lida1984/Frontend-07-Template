/*
 * @Description:
 * @Autor: lida
 * @Date: 2021-01-25 19:09:09
 * @LastEditors: lida
 * @LastEditTime: 2021-01-29 19:54:32
 * @FilePath: \Frontend-07-Template\Week09\parser.js
 */
const { match } = require('assert')
const css = require('css')
let currrentTextNode = null
let currrentToken = null
let currrentAttribte = null
let stack = [{ type: 'document', children: [] }]

let rules = []
function addCSSRules(text) {
  var ast = css.parse(text)
  rules.push(...ast.stylesheet.rules)
}
function match(element, selector) {
  // 5 选择器和属性匹配
  if (!selector || !element.attributes) {
    return false
  }
  if (selector.charAt(0) === '#') {
    let attr = element.attributes.filter((attr) => attr.name === 'id')[0]
    if (attr && attr.value === selector.replace('#', '')) {
      return true
    }
  } else if (selector.charAt(0) === '.') {
    let attr = element.attributes.filter((attr) => attr.name === 'class')[0]
    if (attr && attr.value === selector.replace('.', '')) {
      return true
    }
  } else {
    if (element.tagName === selector) {
      return true
    }
  }
  return false
}
function computeCSS(element) {
  // 2
  // 计算 css 规则
  let elements = stack.slice().reverse() // 3 获取父元素序列
  // 4
  if (!element.computedStyle) {
    element.computedStyle = {}
  }
  for (let rule of rules) {
    var selectorParts = rule.selectors[0].split(' ').reverse()
    if (!match(element, selectorParts[0])) {
      continue
    }
    let matched = false
    var j = 1
    for (let i = 0; i < elements.length; i++) {
      if (match(elements[i], selectorParts[j])) {
        j++
      }
    }
    if (j >= selectorParts.length) {
      matched = true
    }
    if (matched) {
      // 6 匹配到
      let computedStyle = element.computedStyle
      for (let declaration of rule.declarations) {
        if (!computedStyle[declaration.property]) {
          computedStyle[declaration.property] = {}
        }
        // 优先级处理
        if (!computedStyle[declaration.property].specificity) {
          computedStyle[declaration.property].value = declaration.value
          computedStyle[declaration.property].specificity = sp
        } else if (
          compare(computedStyle[declaration.property].specificity, sp) < 0
        ) {
          computedStyle[declaration.property].value = declaration.value
          computedStyle[declaration.property].specificity = sp
        }
      }
    }
  }
}
function specificity(selector) {
  // 7
  let p = [0, 0, 0, 0]
  let selectorParts = selector.split(' ')
  for (let part of selectorParts) {
    if (part.charAt(0) === '#') {
      p[1]++
    } else if (part.charAt(0) === '.') {
      p[2]++
    } else {
      p[3]++
    }
  }
  return p
}
function compare(sp1, sp2) {
  if (sp1[0] - sp2[0]) {
    return sp1[0] - sp2[0]
  }
  if (sp1[1] - sp2[1]) {
    return sp1[1] - sp2[1]
  }
  if (sp1[2] - sp2[2]) {
    return sp1[2] - sp2[2]
  }
  return sp1[3] - sp2[3]
}
function emit(token) {
  let top = stack[stack.length - 1]
  if (token.type === 'startTag') {
    let element = {
      type: 'element',
      children: [],
      attributes: []
    }
    element.tagName = token.tagName
    for (let p in token) {
      if (p != 'type' && p != 'tagName') {
        element.attributes.push({
          name: p,
          value: token[p]
        })
      }
    }
    // 计算 css
    computeCSS(element)

    top.children.push(element)
    element.parent = top
    if (!token.isSelfClosing) {
      stack.push(element)
    }
    currrentTextNode = null
  } else if (token.type === 'endTag') {
    if (top.tagName != token.tagName) {
      throw new Error('not match')
    } else {
      // 处理 style 标签, 收集 css rules
      if (top.tagName === 'style') {
        addCSSRules(top.children[0].content)
      }

      stack.pop()
    }
    currrentTextNode = null
  } else if (token.type === 'text') {
    if (currrentTextNode === null) {
      currrentTextNode = {
        type: 'text',
        content: ''
      }
      top.children.push(currrentTextNode)
    }
    currrentTextNode.content += token.content
  }
}
const EOF = Symbol('EOF')
function data(c) {
  if (c === '<') {
    return tagOpen
  } else if (c === EOF) {
    return
  } else {
    return data
  }
}
function tagOpen(c) {
  if (c === '/') {
    return endTagOpen
  } else if (c.match(/^[a-zA-Z]$/)) {
    return tagName(c)
  } else {
    return
  }
}
function endTagOpen(c) {
  if (c.match(/^[a-zA-Z]$/)) {
    return tagName(c)
  } else if (c === '>') {
  } else {
  }
}
function tagName(c) {
  if (c.match(/^[\t\n\f ]$/)) {
    return beforeAttributeName
  } else if (c === '/') {
    return selfClosingStartTag
  } else if (c.match(/^[a-zA-Z]$/)) {
    return tagName
  } else if (c === '>') {
    return data
  } else {
    return tagName
  }
}
function beforeAttributeName(c) {
  if (c.match(/^[\t\n\f ]$/)) {
    return beforeAttributeName
  } else if (c === '>') {
    return data
  } else if (c === '=') {
    return beforeAttributeName
  } else {
    return beforeAttributeName
  }
}
function selfClosingStartTag(c) {
  if (c === '>') {
    currrentToken.isSelfClosing = true
    return data
  } else if (c === 'EOF') {
    return // 报错
  } else {
    return
  }
}
module.exports.parseHTML = function (html) {
  console.log(html)
  let state = data
  for (let c of html) {
    state = state(c)
  }
  state = state(EOF)
}
