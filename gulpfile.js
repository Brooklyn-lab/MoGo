const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const watcher = require("gulp-watch");

gulp.task("sass", function() {
  return gulp
    .src("./src/scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./assets/css/"));
});
