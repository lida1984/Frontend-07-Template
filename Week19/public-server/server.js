/*
 * @Description:
 * @Autor: lida
 * @Date: 2021-04-21 20:46:46
 * @LastEditors: lida
 * @LastEditTime: 2021-04-22 20:12:35
 * @FilePath: \Frontend-07-Template\Week19\public-server\server.js
 */
const http = require('http')
const fs = require('fs')
http
  .createServer(function (req, res) {
    console.log('server', req)
    let outFile = fs.createWriteStream('./public/index.html')
    req.pipe(outFile) // 相当于下面的 ondata onend
    // req.on('data', function (chunk) {
    //   console.log(chunk.toString())
    //   outFile.write(chunk)
    // })
    // req.on('end', function (chunk) {
    //   console.log(chunk)
    //   outFile.write(chunk)
    //   outFile.end()
    //   res.end('Success: hello lida')
    // })
  })
  .listen(8088)
