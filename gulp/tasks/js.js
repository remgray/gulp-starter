import webpack from "webpack-stream";
import sourcemaps from 'gulp-sourcemaps';
import TerserPlugin from 'terser-webpack-plugin'

export const js = () => {
	return app.gulp.src(app.path.src.js)
		.pipe(webpack({
			mode: app.isBuild ? "production" : "development",
			output: {
				filename: 'app.min.js'
			},
			module: {
				rules: [{
					test: /\.m?js/,
					type: "javascript/auto",
				},
				{
					test: /\.m?js/,
					resolve: {
						fullySpecified: false,
					},
				},
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader'],
				},
				],
			},
			optimization: {
				minimize: true,
				minimizer: [
					new TerserPlugin({
						terserOptions: {
							output: {
								comments: true,
								beautify: false,
							},
							mangle: false
						},
					}),
				],
			},
		}))
		.pipe(sourcemaps.init())
		.pipe(sourcemaps.write('../js'))
		.pipe(app.gulp.dest(app.path.build.js))
		.pipe(app.plugins.browserSync.stream());
}