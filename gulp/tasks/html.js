import fileInclude from "gulp-file-include";
import webpHtmlNosvg from "gulp-webp-html-nosvg";
import versionNumber from "gulp-version-number";
import pug from "gulp-pug-i18n";
import * as path from 'path';


export const html = () => {

  return app.gulp.src(app.path.src.html)
    .pipe(
      app.path.config.pug ?
        pug({
          i18n: {
            namespace: "LANG",
            locales: "src/locale/*", // locales: en.yml, de.json,
            filename: "{{{lang}}/}{{basename}}.html",
            default: app.path.config.DEFAULT_LOCALE
          },
          data: {
            url(LANG, baseUrl) {
              const locale = LANG.locale || LANG;

              const urlLocale = app.path.config.DEFAULT_LOCALE === locale ? "" : locale;
              return path.join(`/${urlLocale}/`, baseUrl);
            }
          },
          pretty: true
        })
        : fileInclude())
    .pipe(app.plugins.replace(/@img\//g, 'img/'))
    .pipe(
      app.plugins.if(
        app.isBuild,
        webpHtmlNosvg())
    )
    .pipe(
      app.plugins.if(
        app.isBuild,
        versionNumber({
          'value': '%DT%',
          'append': {
            'key': '_v',
            'cover': 0,
            'to': [
              'css',
              'js'
            ]
          },
          'output': {
            'file': 'gulp/version.json'
          }
        }))
    )
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browserSync.stream())
}