/*
 * @Description:
 * @Autor: lida
 * @Date: 2021-02-11 10:53:57
 * @LastEditors: lida
 * @LastEditTime: 2021-02-12 11:04:52
 * @FilePath: \Frontend-07-Template\Week11\match.js
 */

function match(selector, element) {
  /**
   * 假定1： 输入的选择器为正确格式
   * 假定2： element 为一个元素
   */
  if (!selector) return false
  const arr = selector.split(' ')
  const lastStr = arr[arr.length - 1]
  if (lastStr.indexOf('#') != -1) {
    // 有 id
    return
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf('#' != -1)) {
      const ele = document.getElementById(arr[i])
    }
  }
  return true
}

match('div #id.class', document.getElementById('id'))
