import fileInclude from "gulp-file-include";
import versionNumber from "gulp-version-number";
import pug from "gulp-pug";
import gulpData from "gulp-data";
import * as path from 'path';
import fs from 'fs';
import rename from "gulp-rename";

const localesDir = 'src/locale';
const languages = fs.readdirSync(localesDir).map(f => path.basename(f, path.extname(f)));

export const html = () => {
	if (!app.path.config.pug) {
		return app.gulp.src(app.path.src.html)
			.pipe(fileInclude())
			.pipe(app.plugins.replace(/@img\//g, 'img/'))
			.pipe(
				app.plugins.if(
					app.isBuild,
					versionNumber({
						value: '%DT%',
						append: {
							key: '_v',
							cover: 0,
							to: ['css', 'js']
						},
						output: {
							file: 'gulp/version.json'
						}
					})
				)
			)
			.pipe(app.gulp.dest(app.path.build.html))
			.pipe(app.plugins.browserSync.stream());
	}

	const tasks = languages.map(locale => {
		return new Promise((resolve, reject) => {
			const i18nPath = path.join(localesDir, `${locale}.json`);
			if (!fs.existsSync(i18nPath)) {
				console.warn(`Language file not found: ${i18nPath}`);
				return resolve();
			}

			const i18n = JSON.parse(fs.readFileSync(i18nPath, 'utf8'));
			const isDefault = locale === app.path.config.DEFAULT_LOCALE;
			const outputLocale = isDefault ? '' : `${locale}/`;

			const stream = app.gulp.src(app.path.src.html)
				.pipe(gulpData(() => ({
					LANG: i18n,
					url(LANG, baseUrl) {
						const l = LANG.locale || locale;
						const urlLocale = app.path.config.DEFAULT_LOCALE === l ? "" : l;
						return path.posix.join(`/${urlLocale}/`, baseUrl);
					}
				})))
				.pipe(pug({ pretty: false }))
				.pipe(rename((filePath) => {
					filePath.dirname = path.posix.join(outputLocale, filePath.dirname);
				}))
				.pipe(app.plugins.replace(/@img\//g, 'img/'))
				.pipe(
					app.plugins.if(
						app.isBuild,
						versionNumber({
							value: '%DT%',
							append: {
								key: '_v',
								cover: 0,
								to: ['css', 'js']
							},
							output: { file: 'gulp/version.json' }
						})
					)
				)
				.pipe(app.gulp.dest(app.path.build.html))
				.pipe(app.plugins.browserSync.stream());

			stream.on('finish', resolve);
			stream.on('error', reject);
		});
	});

	return Promise.all(tasks);
};
