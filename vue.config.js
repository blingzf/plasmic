const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
const htmlTitle = 'Nano+ 复购';
module.exports = {
  publicPath: "./",
  assetsDir: "static",
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    port: 8080,
    open: true,
    overlay: {
      warnings: false,
      errors: false
    },
    // before: require('./mock/mock-server.js'),
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: 'https://iflybudstest.iflysec.com',
				// target: 'https://www.iflybuds.com',
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  },
	pluginOptions: {
	  'style-resources-loader': {
	    preProcessor: 'scss',
	    patterns: [
	      path.resolve(__dirname, 'src/assets/style/color.scss')
	    ]
	  }
	},
	chainWebpack: config => {
		config.plugin('html').tap(args => {
		  args[0].title = htmlTitle
		  return args
		});
		config.module
			.rule('vue')
			.use('vue-loader')
			.tap(options => ({
				...options,
				compilerOptions: {
					// 将所有以 auth- 开头的标签作为自定义元素处理
					isCustomElement: tag => tag.startsWith('auth-')
				}
			}))
			// set svg-sprite-loader
			config.module
			  .rule('svg')
			  .exclude.add(resolve('src/assets/icons'))
			  .end()
			config.module
			  .rule('icons')
			  .test(/\.svg$/)
			  .include.add(resolve('src/assets/icons'))
			  .end()
			  .use('svg-sprite-loader')
			  .loader('svg-sprite-loader')
			  .options({
			    symbolId: 'icon-[name]'
			  })
			  .end()
	},
	configureWebpack: {
	 module: {
	    rules: [{
	      test: /\.mjs$/,
	      include: /node_modules/,
	      type: "javascript/auto"
	    },
			
			]
	  }
	}
}
