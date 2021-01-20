/*
 * @Description:
 * @Autor: lida
 * @Date: 2021-01-19 09:42:45
 * @LastEditors: lida
 * @LastEditTime: 2021-01-20 11:52:02
 * @FilePath: \Frontend-07-Template\Week08\server.js
 */
const http = require('http')
http
  .createServer((request, response) => {
    let body = []
    request
      .on('error', (err) => {
        console.log(err)
      })
      .on('data', (chunk) => {
        console.log('收到客户端数据')
        body.push(chunk.toString())
      })
      .on('end', () => {
        body = Buffer.concat(body).toString()
        console.log(body)
        response.writeHead(200, { 'Content-Type': 'text/html' })
        response.end(' Hello World \n')
      })
  })
  .listen(8088)
console.log('server started')
