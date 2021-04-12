/*
 * @Description:
 * @Autor: lida
 * @Date: 2021-04-06 19:29:34
 * @LastEditors: lida
 * @LastEditTime: 2021-04-09 10:26:19
 * @FilePath: \Frontend-07-Template\Week18\test\test.js
 */
var assert = require('assert')

import { add, mul } from '../src/add'

describe('add function', function () {
  it(' 1+ 3 should return 4', function () {
    assert.strictEqual(add(1, 3), 4)
  })
  it(' -1+ 3 should return 2', function () {
    assert.strictEqual(add(-1, 3), 2)
  })
  it(' -1* 3 should return -3', function () {
    assert.strictEqual(mul(-1, 3), -3)
  })
})
