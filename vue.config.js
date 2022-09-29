const { defineConfig } = require('@vue/cli-service')
const { VantResolver } = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');
module.exports = defineConfig({
  transpileDependencies: true,
	devServer:{
		proxy:{
			'/api':{
				target:'http://127.0.0.1:8000',
				changeOrigin:true,
				pathRewrite:{
					'^/api':''
				}
			}
		}
	},
	configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
  },
})
