const path = require("path");
const resolve = (dir) => path.resolve(__dirname, dir);
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")
const CompressionWebpackPlugin = require("compression-webpack-plugin");
module.exports = {
  webpack: {
    alias: {
      "@": resolve("src"),
      'components': resolve("src/components"),
      'pages': resolve("src/pages"),
      'network': resolve("src/network")
    },
    externals: {
      'antd': 'antd'
    },
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerHost: '127.0.0.1',
        analyzerPort: 8889,
      }),
      new CompressionWebpackPlugin({
        test: /.(js|css)$/, // 压缩js和css
        threshold: 10240, // 达到10k才启用，资源过小没必要，而且解压也是有损耗
        minRatio: 0.6 //压缩最小比例下限
        // 其他参数使用默认
      }),
    ]
  },
};
