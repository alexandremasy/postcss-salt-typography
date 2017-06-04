var gulp = require('gulp');
var postcss = require('gulp-postcss');
var salt = require('./index.js');

var rubik = {
  name: "heading",
  family:  "Rubik",
  typefaces: [
    "normal default google",
    "bold google"
  ],
  sizes:{
    xxs:    [".512rem",  ".579rem"],
    xs:     [".64rem",   ".694rem"],
    s:      [".8rem",    ".833rem"],
    m:      ["1rem",     "1rem"],
    l:      ["1.25rem",  "1.2rem"],
    xl:     ["1.563rem", "1.44rem"],
    xxl:    ["1.953rem", "1.728rem"]
  },
  lineHeight: {
    xxs:    ["1.2rem",   "1.2rem"],
    xs:     ["1.2rem",   "1.2rem"],
    s:      ["1.2rem",   "1.2rem"],
    m:      ["1.3rem",   "1.2rem"],
    l:      ["1.35rem",  "1.3rem"],
    xl:     ["1.4rem",   "1.4rem"],
    xxl:    ["1.45rem",  "1.4rem"]
  }
};

var helvetica = {
  name: "body",
  family:  "Helvitca Neue",
  typefaces: [
    "normal default",
    "bold"
  ],
  sizes:{
    xxs:    [".512rem",  ".579rem"],
    xs:     [".64rem",   ".694rem"],
    s:      [".8rem",    ".833rem"],
    m:      ["1rem",     "1rem"],
    l:      ["1.25rem",  "1.2rem"],
    xl:     ["1.563rem", "1.44rem"],
    xxl:    ["1.953rem", "1.728rem"]
  },
  lineHeight: {
    xxs:    ["1.2rem",   "1.2rem"],
    xs:     ["1.2rem",   "1.2rem"],
    s:      ["1.2rem",   "1.2rem"],
    m:      ["1.3rem",   "1.2rem"],
    l:      ["1.35rem",  "1.3rem"],
    xl:     ["1.4rem",   "1.4rem"],
    xxl:    ["1.45rem",  "1.4rem"]
  }
};

var typography = [ rubik, helvetica ];

gulp.task('css', function ()
{
  var processors = [
    salt(typography)
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
