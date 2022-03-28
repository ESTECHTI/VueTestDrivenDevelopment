const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
});
module.exports = {
  devServer: {
    port: 9876,
    proxy: {
      "/api": {
        target: "http://localhost:8080"
      }
    }
  }
}
