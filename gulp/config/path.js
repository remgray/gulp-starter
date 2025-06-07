import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

// const buildFolder = '/OSPanel/domains/';
const buildFolder = './build';
const srcFolder = './src';

const config = {
	pug: true,
	DEFAULT_LOCALE: 'en',
	localesPath: './src/locale',
}

const templateExt = config.pug ? 'pug' : 'html';
const templatePattern = config.pug ? 'pug' : '{pug,html}';

export const path = {
	build: {
		html: `${buildFolder}/`,
		css: `${buildFolder}/css/`,
		js: `${buildFolder}/js/`,
		images: `${buildFolder}/assets/img/`,
		fonts: `${buildFolder}/assets/fonts/`,
		copy: `${buildFolder}/`
	},
	src: {
		html: `${srcFolder}/*.${templatePattern}`,
		scss: `${srcFolder}/style/main.scss`,
		js: `${srcFolder}/js/app.js`,
		images: `${srcFolder}/assets/img/**/*.{jpg,jpeg,png,gif,webp}`,
		svg: `${srcFolder}/assets/img/**/*.svg`,
		fonts: `${srcFolder}/assets/fonts/**/*.*`,
		copy: `${srcFolder}/copy/**/*.*`,
	},
	watch: {
		html: `${srcFolder}/**/*.${templateExt}`,
		scss: `${srcFolder}/style/**/*.scss`,
		js: `${srcFolder}/js/**/*.js`,
		images: `${srcFolder}/assets/img/**/*.{jpg,jpeg,png,gif,webp,svg}`,
		locales: `${srcFolder}/locale/*`,
		copy: `${srcFolder}/copy/**/*.*`
	},
	clean: buildFolder,
	buildFolder,
	srcFolder,
	rootFolder,
	config,
	ftp: `test`
}