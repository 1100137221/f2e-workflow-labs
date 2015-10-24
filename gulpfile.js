var gulp = require('gulp');

gulp.task('default', ['mytask1', 'mytask2'], function() {
	console.log('Hello default task');
});

gulp.task('mytask1', function(cb) {
	console.log('Hello task1');
	cb();
});

gulp.task('mytask2', function(cb) {
	console.log('Hello task1');
	cb();
});