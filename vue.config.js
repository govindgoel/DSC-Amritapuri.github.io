module.exports = {
  publicPath: '/',
  productionSourceMap: false,
  pwa: {
    name: 'DSC Amrita University, Amritapuri',
    workboxPluginMode: 'InjectManifest',
    themeColor: '#4A90E2',
    workboxOptions: {
      swSrc: './src/sw.js',
      swDest: 'service-worker.js',
    },
  }
}
