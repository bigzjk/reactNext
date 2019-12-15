const withCss = require('@zeit/next-css')

if(typeof require !== 'undefined'){
    require.extensions['.css']=file=>{}
}

module.exports = withCss({
    generateBuildId: async () => {
        // For example get the latest git commit hash here
        return 'v1'
      }
})
  