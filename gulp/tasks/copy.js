export const copy = () => {
	return app.gulp.src(app.path.src.copy)
		.pipe(app.gulp.dest(app.path.build.copy))
}