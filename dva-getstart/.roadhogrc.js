module.exports = {
  "entry": "./src/index.js",
  "env": {
    "development": {
      "extraBabelPlugins": [
        "dva-hmr",
        "transform-runtime",
        ["import", { "libraryName": "antd", "style": "css" }]
      ]
    },
    "production": {
      "extraBabelPlugins": [
        "transform-runtime"
      ]
    }
  },
  "proxy":{
    "/api": {
      "target": "http://jsonplaceholder.typicode.com/",
      "changeOrigin": true,
      "pathRewrite": { "^/api": "" }
    }
  }
}