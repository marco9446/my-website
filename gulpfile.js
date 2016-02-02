'use strict';

const gulp = require('gulp'),
  webpack = require('gulp-webpack'),
  browserSync = require('browser-sync').create(),
  sass = require('gulp-ruby-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  uglify = require('gulp-uglify'),
  del = require('del'),
  uglifycss = require('gulp-uglifycss'),
  imagemin = require('gulp-imagemin'),
  imageminOptipng = require('imagemin-optipng'),
  imageminJpegtran = require('imagemin-jpegtran'),
  rename = require("gulp-rename"),
  htmlreplace = require('gulp-html-replace'),
  replace = require('gulp-replace'),
  imageminSvgo = require('imagemin-svgo');

// react compiler
gulp.task( 'react' ,function () {
  return gulp.src('app/components/index.jsx')
  .pipe(webpack({
    watch: false,
    output: {
      filename: 'bundle.js',
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel', // 'babel-loader' is also a legal name to reference
          query: {
            presets: ['react', 'es2015']
          }
        }
      ],
    },
  }))
  .pipe(gulp.dest('app/temporary/'))
  .pipe(browserSync.stream());
});


// sass compiler
gulp.task('sass', function () {
  return sass('app/style/main.scss')
  .on('error', sass.logError)
  .pipe(autoprefixer({
		browsers: ['last 3 versions'],
		cascade: false
	}))
  .pipe(gulp.dest('app/temporary'))
  .pipe(browserSync.stream());
});


// server
gulp.task('serve', ['react','sass'], function() {
  browserSync.init({
      server: "./app",
      notify: false
  });
  gulp.watch("app/style/**/*.scss", ['sass']);
  gulp.watch("app/components/**/*.jsx", ['react']);
  gulp.watch("app/projects.json", ['react']);
  gulp.watch("app/*.html").on('change', browserSync.reload);
});




// default behaviour
gulp.task('default', ['serve'])



// clean dist folder before distribution
gulp.task('clean:dist', function () {
  return del([
    'dist/**/*'
    // to exclude a file use !.   ex '!dist/example.js'
  ]);
  cb(err);
});

// distribution behaviour
gulp.task('dist', ['clean:dist'], function(){
  // uglify css
  gulp.start('sass','react','imageOptim');
  gulp.src('app/temporary/main.css')
  .pipe(uglifycss({
     "max-line-len": 80
   }))
  .pipe(rename("style.min.css"))
  .pipe(gulp.dest('dist/'));

  // uglify bundle js
  gulp.src('app/temporary/bundle.js')
  .pipe(uglify())
  .pipe(replace('../images', './images'))
  .pipe(rename("bundle.min.js")) // change path for images
  .pipe(gulp.dest('dist/'));

  // move html in dist folder and change dependencies
  gulp.src('app/index.html')
    .pipe(htmlreplace({
        'css': './style.min.css',
        'js': './bundle.min.js'
    }))
    .pipe(gulp.dest('dist/'));

});


// optimize images and copy them in the dist folder
gulp.task('imageOptim', ()=>{
  return gulp.src('app/images/*')
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [imageminOptipng(),imageminSvgo(),imageminJpegtran()]
		}))
		.pipe(gulp.dest('dist/images'));
})
