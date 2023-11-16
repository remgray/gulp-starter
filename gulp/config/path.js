import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

// const buildFolder = '/OSPanel/domains/';
const buildFolder = './build';
const srcFolder = './src';
const config = {
	DEFAULT_LOCALE: 'en'
}

export const path = {
	build: {
		html: `${buildFolder}/`,
		css: `${buildFolder}/css/`,
		js: `${buildFolder}/js/`,
		images: `${buildFolder}/img/`,
		fonts: `${buildFolder}/fonts/`,
		assets: `${buildFolder}/assets/`
	},
	src: {
		html: `${srcFolder}/*.{pug,html}`,
		scss: `${srcFolder}/style/bundle.scss`,
		js: `${srcFolder}/js/app.js`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
		svg: `${srcFolder}/img/**/*.svg`,
		fonts: `${srcFolder}/fonts/**/*.*`,
		assets: `${srcFolder}/assets/**/*.*`,
	},
	watch: {
		html: `${srcFolder}/**/*.{pug,html}`,
		scss: `${srcFolder}/style/**/*.scss`,
		js: `${srcFolder}/js/**/*.js`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg}`,
		locales: `${srcFolder}/locale/*`,
		assets: `${srcFolder}/assets/**/*.*`
	},
	clean: buildFolder,
	buildFolder,
	srcFolder,
	rootFolder,
	config,
	ftp: `test`
}