const gulp = require("gulp");
const rename = require("gulp-rename");
const autoprefixer = require("gulp-autoprefixer")
const sass = require("gulp-sass")(require("sass"));

// npx gulp
gulp.task("default", () => {
return gulp.watch("./styles/**/*.scss", () => {
	return (
	gulp
		.src("./styles/**/*.scss")
		.pipe(
		sass({
			outputStyle: "compressed"
		})
		.on("error", sass.logError)
		)
		.pipe(
		autoprefixer({
			cascade: false,
			grid: true
		})
		)
		.pipe(
		rename({
			suffix: ".min"
		})
		)
		.pipe(
		gulp.dest("./styles")
		)
	);
});
});

// doesn't minify
gulp.task("sass", () => {
return (
	gulp
	.src("./styles/**/*.scss")
	.pipe(sass())
	.pipe(gulp.dest("./styles"))
);
});

