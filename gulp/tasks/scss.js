import dartSass from 'sass';
import gulpSass from 'gulp-sass'
import rename from "gulp-rename"
import cleanCss from 'gulp-clean-css'
import bulk from 'gulp-sass-bulk-importer'
import autoprefixer from 'gulp-autoprefixer'
import groupCssMediaQueries from 'gulp-group-css-media-queries'

const sass = gulpSass(dartSass)

export const scss = () => {
  return app.gulp.src(app.path.src.scss)
    .pipe(bulk())
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(app.plugins.replace(/@img\//g, '../img/'))
    .pipe(
      app.plugins.if(
        app.isBuild,
        groupCssMediaQueries())
    )
    .pipe(
      app.plugins.if(
        app.isBuild,
        autoprefixer({
          grid: true,
          overrideBrowserslist: ["last 3 versions"],
          cascade: true
        }))
    )
    .pipe(
      app.plugins.if(
        app.isBuild,
        cleanCss())
    )
    .pipe(rename({
      extname: ".min.css"
    }))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browserSync.stream())
}