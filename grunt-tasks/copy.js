var task = {
	package:{
		files: [
			{expand: true, flatten: true, src: ['grunt-tasks/*.*'], dest: '_package/grunt-tasks/', filter: 'isFile'},
			{expand: true, flatten: true, src: ['Gruntfile.js'], dest: '_package/', filter: 'isFile'},
			{expand: true, flatten: true, src: ['.editorconfig'], dest: '_package/', filter: 'isFile'},
			{expand: true, flatten: true, src: ['.gitignore'], dest: '_package/', filter: 'isFile'},
			{expand: true, flatten: true, src: ['package.json'], dest: '_package/', filter: 'isFile'},
			{expand: true, flatten: true, src: ['README.md'], dest: '_package/', filter: 'isFile'},
			{expand: true, flatten: true, src: ['package.json.common.dependencies'], dest: '_package/', filter: 'isFile'}
		]
	}
};

module.exports = task;
