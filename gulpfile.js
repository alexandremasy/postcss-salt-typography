var gulp = require('gulp');
var postcss = require('gulp-postcss');

gulp.task('css', function ()
{
	return gulp.src('./test/basic.css')
		.pipe(postcss())
		.pipe(gulp.dest('./build'));
});
