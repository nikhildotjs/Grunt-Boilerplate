'use strict';

module.exports = function(grunt) {

	// Loading the package details
	var taskObject = {
		pkg: grunt.file.readJSON('package.json')
	};

	// Traverse through the grunt-tasks directory for any task that is defined.
	grunt.file.expand('grunt-tasks/*.js', '!grunt-tasks/_*.js').forEach(function(file) {
		var name = file.split('/');
		name = name[name.length - 1].replace('.js', '');
		var task = require('./'+ file);

		if(grunt.util._.isFunction(task)){
			task(grunt);
		} else {
			taskObject[name] = task;
		}
	});

	grunt.initConfig(taskObject);

	// Automatically load in all Grunt npm tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	// Register any task that you will want to call through.
	grunt.registerTask("default", ["package"]);
	grunt.registerTask("package", ["clean", "copy:package"])
};
