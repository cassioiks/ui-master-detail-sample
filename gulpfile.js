var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
  gulp.src('WebContent')
    .pipe(webserver({
      port: 9000,
      host: "0.0.0.0",	
      livereload: true,
      open: true,
      proxies: [
      		{
      			source: '/model',
      			target:'YOUR_SERVICE_ENDPOINT'
      		}
      	]
    }));
});

gulp.task('default', ['webserver']);