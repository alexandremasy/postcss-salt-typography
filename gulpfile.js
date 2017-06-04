var gulp = require('gulp');
var postcss = require('gulp-postcss');
var salt = require('./index.js');

gulp.task('css', function ()
{
  var processors = [
    salt({})
  ];

	// var processors = [
	// 	myplugin({
	// 		fontstacks: {
	// 			// 'Extra Stack': '"Extra Stack", "Moar Fonts", Extra, serif',
	// 			// 'Arial': 'Arial, "Comic Sans"'
	// 		}
	// 	})
	// ];

	return gulp.src('./test/*.css')
		.pipe(postcss(processors))
		.pipe(gulp.dest('./build'));
});
