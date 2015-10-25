var $ = require('jquery');

var config = require('./gulp/config');

console.log('Hello world! assets Path: ' + config.assetsDir);

$(function() {
	
	$('body').on('click', function() {
		require('style!css!./assets/styles.css');
	});
	
});