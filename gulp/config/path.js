import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './build';
const srcFolder = './src';
const config = {
  pug: false,
  DEFAULT_LOCALE: 'en'
}

export const path = {
  build: {
    html: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
    js: `${buildFolder}/js/`,
    images: `${buildFolder}/img/`,
    fonts: `${buildFolder}/fonts/`,
    files: `${buildFolder}/files/`
  },
  src: {
    html: `${srcFolder}/*${(config.pug ? ".pug" : ".html")}`,
    scss: `${srcFolder}/style/bundle.scss`,
    js: `${srcFolder}/js/app.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/img/**/*.svg`,
    fonts: `${srcFolder}/fonts/**/*.*`,
    files: `${srcFolder}/files/**/*.*`,
  },
  watch: {
    html: `${srcFolder}/**/*${(config.pug ? ".pug" : ".html")}`,
    scss: `${srcFolder}/style/**/*.scss`,
    js: `${srcFolder}/js/**/*.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg}`,
    locales: `${srcFolder}/locale/*`,
    files: `${srcFolder}/files/**/*.*`
  },
  clean: buildFolder,
  buildFolder,
  srcFolder,
  rootFolder,
  config,
  ftp: `test`
}