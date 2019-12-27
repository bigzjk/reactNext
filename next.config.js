const withCss = require('@zeit/next-css')

if(typeof require !== 'undefined'){
    require.extensions['.css']=file=>{}
}
const isProd = process.env.NODE_ENV === 'production'
module.exports = withCss({
    distDir: 'build',
    pageExtensions: ['jsx', 'js'],
    generateBuildId: async () => {
        // For example get the latest git commit hash here
        return 'v1'
    },
    // assetPrefix: isProd ? 'http://www.alkun.top/static' : './'
    assetPrefix: isProd ? './' : './'
})
  