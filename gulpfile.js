import gulp from 'gulp';
import { path } from './gulp/config/path.js';
// plugins
import { plugins } from './gulp/config/plugins.js'
// tasks
import { copy } from './gulp/tasks/copy.js';
import { html } from './gulp/tasks/html.js';
import { scss } from './gulp/tasks/scss.js';
import { reset } from './gulp/tasks/reset.js';
import { server } from './gulp/tasks/server.js';
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/images.js';
import { fonts } from './gulp/tasks/fonts.js';
import { zip } from './gulp/tasks/zip.js';
import { ftp } from './gulp/tasks/ftp.js';

global.app = {
	isBuild: process.argv.includes('--build'),
	isDev: !process.argv.includes('--build'),
	path,
	gulp,
	plugins
}

process.on('unhandledRejection', err => {
	console.error('UNHANDLED REJECTION:', err);
});

// watcher
function watcher() {
	gulp.watch(path.watch.copy, copy)
	gulp.watch(path.watch.html, html)
	gulp.watch(path.watch.scss, scss)
	gulp.watch(path.watch.js, js)
	gulp.watch(path.watch.images, images)
}

const mainTasks = gulp.parallel(copy, html, scss, js, images, fonts)

// all scripts
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server))
const build = gulp.series(reset, mainTasks)
const deployZip = gulp.series(reset, mainTasks, zip)
const deployFTP = gulp.series(reset, mainTasks, ftp)

export { dev }
export { build }
export { deployZip }
export { deployFTP }

// default script
gulp.task('default', dev)