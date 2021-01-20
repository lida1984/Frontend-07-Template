/*
 * @Description:
 * @Autor: lida
 * @Date: 2021-01-20 14:45:20
 * @LastEditors: lida
 * @LastEditTime: 2021-01-20 15:07:49
 * @FilePath: \Frontend-07-Template\Week08\net.js
 */
const net = require('net')
const client = net.createConnection({ port: 8080 }, () => {
  // 'connect' 监听器
  console.log('已连接到服务器')
  client.write('你好世界!\r\n')
})
client.on('data', (data) => {
  console.log(data.toString())
  client.end()
})
client.on('end', () => {
  console.log('已从服务器断开')
})
