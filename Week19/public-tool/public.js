/*
 * @Description:
 * @Autor: lida
 * @Date: 2021-04-21 20:50:13
 * @LastEditors: lida
 * @LastEditTime: 2021-04-27 14:24:39
 * @FilePath: \Frontend-07-Template\Week19\public-tool\public.js
 */
const http = require('http')
const fs = require('fs')
const child_process = require('child_process')
let file = fs.createReadStream('./package.json')

// child_process.exec(
//   'open https://github.com/login/oauth/authorize?client?client_id='
// )

fs.stat('./package.json', function (err, stats) {
  console.log(stats)

  let request = http.request(
    {
      hostname: '127.0.0.1',
      port: 8088,
      method: 'post',
      headers: {
        'Content-Type': 'application/octet-stream',
        'Content-Length': stats.size
      }
    },
    function (res) {
      console.log('public', res)
    }
  )
  file.pipe(request) // 相当于下面的ondata
  // file.on('data', function (chunk) {
  //   request.write(chunk)
  // })
  file.on('end', function (chunk) {
    request.end(chunk)
  })
})
