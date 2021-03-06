/**
* Backbone.js/RequireJS Template
*
* @info		Initialises the app
* @version	0.4
* @author	Jasal Vadgama - http://blacklabelcreative.com/
* @require	jQuery 1.8.0
			Lo-Dash 0.8.2
			backbone.js 0.92
			requireJS 2.02
* @license	MIT
**/

/* Configure shortcut aliases for required libraries */
require.config({
	baseUrl: '/assets/js',
	paths: {
		// paths to libraries
		jQuery: 'libs/jquery/jquery.min',
		lodash: 'libs/lodash/lodash.underscore.min',
		Backbone: 'libs/backbone/backbone.min',
		text: 'libs/require/text' // text plugin for templates
	},
	shim: {
		// set dependencies for imported scipts
		'jQuery': {
			exports: '$'
		},
		'lodash': {
			exports: '_'
		},
		'Backbone': {
			deps: ['lodash', 'jQuery'],
			exports: 'Backbone'
		}
	}
});

require([
	// load the app module (app.js) and pass it to the definition function
	'app', // App
	'router' // Router
], function(App, Router) {
	// the "app" dependency is passed in as "App"

	// initialze the application view
	App.router = new Router();

	// start the HTML5 History API
	Backbone.history.start();

	// trigger the initial route and enable HTML5 History API support, set the root folder to '/' by default
	// change in app.js if needed
	/*Backbone.history.start({
		pushState: true,
		root: app.root
	});*/
});