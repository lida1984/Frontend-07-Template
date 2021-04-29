/*
 * @Description:
 * @Autor: lida
 * @Date: 2021-04-28 19:49:42
 * @LastEditors: lida
 * @LastEditTime: 2021-04-28 20:10:13
 * @FilePath: \Frontend-07-Template\Week20\headless-demo\main.js
 */
const puppeteer = require('puppeteer')
;(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('http://localhost:8080/carApply/form/1')
  const a = await page.$('#app')
  console.log(a.asElement().boundingBox())

  await browser.close()
})()
