const gulp = require('gulp');
const gzip = require('gulp-gzip');
const color = require('gulp-color');
const imagemin = require('gulp-imagemin');

gulp.task('postbuild__js-browser', () => {
	return gulp.src('./dist/browser/*.js')
		.pipe(gzip({ gzipOptions: { level: 9}, skipGrowingFiles: true }))
		.pipe(gulp.dest('./dist/browser'))
});

gulp.task('postbuild__root-browser', () => {
	return gulp.src('./dist/browser/*')
		.pipe(gzip({ gzipOptions: { level: 9}, skipGrowingFiles: true }))
		.pipe(imagemin([
			imagemin.jpegtran({progressive: true}),
			imagemin.optipng({optimizationLevel: 2}),
			imagemin.svgo({
				plugins: [
					{removeViewBox: true},
					{cleanupIDs: false}
				]
			})
		]))
		.pipe(gulp.dest('./dist/browser'))
});

gulp.task('postbuild__browser-assets', () => {
	return gulp.src('./dist/browser/assets/**/*')
		.pipe(gzip({ gzipOptions: { level: 9 }, skipGrowingFiles: true }))
		.pipe(imagemin([
			imagemin.jpegtran({progressive: true}),
			imagemin.optipng({optimizationLevel: 2}),
			imagemin.svgo({
				plugins: [
					{ removeViewBox: true },
					{ cleanupIDs: false }
				]
			})
		]))
		.pipe(gulp.dest('./dist/browser/assets'))
});

const gulpTasks = [
	'postbuild__js-browser',
	'postbuild__root-browser',
	'postbuild__browser-assets'
];

gulp.task('default', gulpTasks, () => {
	console.log(color(`Postbuild bundle has been successfully streamed ${new Date()}`, 'GREEN'));
});