'use strict'
const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const express = require('express')
const webpack = require('webpack')
const proxyMiddleware = require('http-proxy-middleware')
const webpackConfig = require('../webpack.config.dev')

const app = express()

const port = 3000


webpackConfig.entry.client = [
  `webpack-hot-middleware/client?reload=true`,
  webpackConfig.entry.client
]

let compiler

try {
  compiler = webpack(webpackConfig)
} catch (err) {
  console.log(err.message)
  process.exit(1)
}

const devMiddleWare = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true,
})

// proxy api requests
var proxyTable = {
  '/ssp': {
    target: 'http://192.168.10.234:8080',
    changeOrigin: true,
    logLevel: 'debug',
  },
  '/user': {
    target: 'http://192.168.10.234:8080',
    changeOrigin: true,
    logLevel: 'debug',
  },
  '/1.0': {
    target: 'http://192.168.10.234:8080',
    changeOrigin: true,
    logLevel: 'debug',
  },
  '/public': {
    target: 'http://192.168.10.234:8080',
    changeOrigin: true,
    logLevel: 'debug',
  }
}

Object.keys(proxyTable)
  .forEach(function (context) {
    var options = proxyTable[context]
    if (typeof options === 'string') {
      options = {
        target: options,
        logLevel: 'debug'
      }
    }
    app.use(proxyMiddleware(options.filter || context, options))
  })


app.use(devMiddleWare)
app.use(require('webpack-hot-middleware')(compiler, {
  log: () => {
  }
}))

const mfs = devMiddleWare.fileSystem
const file = path.join(webpackConfig.output.path, 'index.html')


devMiddleWare.waitUntilValid()

// app.all('*', (req, res, next) => {
//   if (req.headers.origin) {
//     res.header("Access-Control-Allow-Origin", req.headers.origin)
//     res.header("Access-Control-Allow-Credentials", true)
//     res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
//     res.header("Access-Control-Allow-Headers", "X-Requested-With, AUTHORIZATION")
//     next()
//   }
// })

app.get('*', (req, res) => {
  devMiddleWare.waitUntilValid(() => {
    const html = mfs.readFileSync(file)
    res.end(html)
  })
})

app.listen(port)
