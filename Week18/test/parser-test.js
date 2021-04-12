/*
 * @Description:
 * @Autor: lida
 * @Date: 2021-04-06 19:29:34
 * @LastEditors: lida
 * @LastEditTime: 2021-04-09 11:01:46
 * @FilePath: \Frontend-07-Template\Week18\test\parser-test.js
 */
var assert = require('assert')

import { parseHTML } from '../src/parser'

describe('parser html:', function () {
  it(' <a>123</a>', function () {
    let tree = parseHTML('<a>123</a>')
    console.log(tree)
    assert.strictEqual(tree.children.tagName, 'a')
  })
})
