const baseUrl = process.env.NODE_ENV === 'production' ? './' : './'; //font scss资源路径 不同环境切换控制
module.exports = {
	publicPath: baseUrl,
	//输出文件目录
	outputDir: 'dist/',
	// eslint-loader 是否在保存的时候检查
	lintOnSave: true,

	//放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
	assetsDir: 'assets',
	//以多页模式构建应用程序。
	pages: undefined,
	//是否使用包含运行时编译器的 Vue 构建版本
	runtimeCompiler: false,
	//是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建，在适当的时候开启几个子进程去并发的执行压缩
	parallel: require('os').cpus().length > 1,
	//生产环境是否生成 sourceMap 文件，一般情况不建议打开
	productionSourceMap: false,
	// webpack配置
	//对内部的 webpack 配置进行更细粒度的修改 https://github.com/neutrinojs/webpack-chain see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
	chainWebpack: config => {
		/**
		 * 删除懒加载模块的prefetch，降低带宽压力
		 * https://cli.vuejs.org/zh/guide/html-and-static-assets.html#prefetch
		 * 而且预渲染时生成的prefetch标签是modern版本的，低版本浏览器是不需要的
		 */
		//config.plugins.delete('prefetch');
		//if(process.env.NODE_ENV === 'production') { // 为生产环境修改配置...process.env.NODE_ENV !== 'development'
		//} else {// 为开发环境修改配置...
		//}
	},
	chainWebpack: config => {
		const oneOfsMap = config.module.rule('scss').oneOfs.store
		oneOfsMap.forEach(item => {
			item
				.use('sass-resources-loader')
				.loader('sass-resources-loader')
				.options({
					// 要公用的scss的路径
					resources: './src/assets/scss/css.scss'
				})
				.end()
		})
	},
	lintOnSave:false,
	devServer: {
		overlay: {
			warnings: false,
			errors: false
		},
	}
}
