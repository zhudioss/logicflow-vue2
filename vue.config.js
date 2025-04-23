const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/LogicFlow-v2/', // 使用相对路径，确保 GitHub Pages 访问正确
  // outputDir: 'dist' // 构建输出目录
})
