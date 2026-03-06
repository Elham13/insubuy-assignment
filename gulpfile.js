const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");

function buildStyles() {
	return src("src/scss/main.scss")
		.pipe(sass({ outputStyle: "compressed" }))
		.pipe(postcss([autoprefixer()]))
		.pipe(dest("dist"));
}

function watchTask() {
	watch(["src/scss/**/*.scss"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
