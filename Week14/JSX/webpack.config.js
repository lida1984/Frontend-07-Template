/*
 * @Description:
 * @Autor: lida
 * @Date: 2021-03-10 19:17:28
 * @LastEditors: lida
 * @LastEditTime: 2021-04-01 19:46:11
 * @FilePath: \Frontend-07-Template\Week14\JSX\webpack.config.js
 */
/**
 * 解析 jsx :
 * [["@babel/plugin-transform-react-jsx",{pragma: "createElement"}]]
 * pragma 此参数设置后可以与 react 脱离关系，将 React.createElement 变成 createElement
 */
//

module.exports = {
  entry: './main-demo.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              ['@babel/plugin-transform-react-jsx', { pragma: 'createElement' }]
            ]
          }
        }
      }
    ]
  }
}
