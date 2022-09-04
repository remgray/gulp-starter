import webpack from "webpack-stream";
import sourcemaps from 'gulp-sourcemaps';

export const js = () => {
  return app.gulp.src(app.path.src.js)
    .pipe(webpack({
      mode: app.isBuild ? "production" : "development",
      output: {
        filename: 'app.min.js'
      }
    }))
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write('../js'))
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browserSync.stream());
}