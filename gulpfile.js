var gulp = require('gulp');
var del = require('del');

var concat = require('gulp-concat');

gulp.task('default', ['mytask1', 'mytask2'], function() {
	console.log('Hello default task');
});

gulp.task('mytask1', function() {
	console.log('Hello task1');
});

gulp.task('mytask2', function(cb) {
	console.log('Hello task1');
	cb();
});

gulp.task('output1', function() {
	gulp
		.src('assets/vendor/bootstrap/**/*.js')
		.pipe(gulp.dest('output1'));
});

gulp.task('output2', ['clean'], function() {
	gulp
		.src('assets/vendor/bootstrap/**/*.js',
			{
				base: 'assets/vendor/'
			})
		.pipe(gulp.dest('output2'));
});

gulp.task('output3', ['clean', 'mytask1'], function() {
	gulp
		.src([
				'assets/vendor/**/*.js',
				'assets/vendor/**/*.css'
			])
		.pipe(gulp.dest('output3'));
});

gulp.task('clean', function(cb) {
	del(['output3/**', '!output3']).then(function (paths) {
		console.log('Deleted files/folders:\n', paths.join('\n'));
		cb();
	});
});


gulp.task('output-app', ['clean-app'],function() {
	gulp
		.src('app/**/*.js')
		.pipe(gulp.dest('output-app'));
});
gulp.task('clean-app', function(cb) {
	del(['output-app/**', '!output-app']).then(function () {
		cb();
	});
});

gulp.task('watch', function() {
	gulp
		.watch('app/**/*.js', ['app']);
});

gulp.task('app', function() {
	gulp.src([
			'app/**/*.module.js',
			'app/**/*.js'
		])
		.pipe(concat('app.js'))
		.pipe(gulp.dest('assets'));
});
