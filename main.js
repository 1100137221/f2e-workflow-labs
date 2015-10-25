var $ = require('jquery');

var config = require('./gulp/config');

console.log('Hello world! assets Path: ' + config.assetsDir);

$(function() {
	
	$('body').on('click', function() {
		require('./assets/styles.css');
		
		var picurl = require('./Avatar.jpg');
		 
		$('#pic').append('<img src="'+picurl+'">')
		
	});
	
});