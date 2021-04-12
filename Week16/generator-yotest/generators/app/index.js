/*
 * @Description:
 * @Autor: lida
 * @Date: 2021-03-31 19:34:49
 * @LastEditors: lida
 * @LastEditTime: 2021-04-02 09:46:57
 * @FilePath: \Frontend-07-Template\Week16\generator-yotest\generators\app\index.js
 */
var Generator = require('yeoman-generator')
module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts)
    this.log('constructor')
    this.option('label')
  }
  method1 {
      this.log('输出')
  }
}
