//module utama gulp
var gulp = require("gulp");

//Module compile sass/scss
var sass = require("gulp-sass");

//notif error
var notify = require("gulp-notify");

// handle error
var errorHandle = require("gulp-error-handle");

//module sinchrone
var browserSync = require("browser-sync").create();

//pug html
var pug = require("gulp-pug");

//html beauty
var htmlBeautify = require('gulp-html-beautify');

var optionsHTML = {
  indent_size: 2,
  indent_char: ' ',
  eol: '\n',
  end_with_newline: true
}

function style(){
  return(
    gulp
      .src("src/scss/**/*.scss") //lokasi sumber dev
      .pipe(errorHandle()) // aktifkan error handle
      .pipe(sass().on("error", notify.onError(
        function(err) {
          return '\nProblem file : ' + err.message + err.path;
        }
        )))
      .pipe(gulp.dest("dist/assets/css/")) // lokasi hasil compile scss
      .pipe(browserSync.stream())
    );
}

function compilePug() {
  return (
    gulp
      .src("src/pug/pages/*.pug")
      .pipe(pug())
      .on("error", notify.onError(
        (err) => {
          return '\nProblem file : ' + err.message + err.path;
        }
        ))

      .pipe(htmlBeautify(optionsHTML))
      .pipe(gulp.dest("dist/")) //lokasi hasi compile
      .pipe(browserSync.stream())
    )
}

function serve(done){
  // initialize
  browserSync.init({
    server: {
      baseDir: "dist"
    }
  });
  done();
}

function watch(done) {
  //watching perubahan file pug
  gulp.watch("src/pug/**/*.pug", compilePug)

  //watching perubahan file
  gulp.watch("src/scss/**/*.scss", style);
  return done();
}

exports.style = style;
exports.compilePug = compilePug;
exports.watch = watch;
exports.default = gulp.series(style, compilePug, serve, watch);