/*
 * json_checker-gruntplugin
 * https://github.com/f.rota/json_checker-gruntplugin
 *
 * Copyright (c) 2016 Federico Rota
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('json_checker_gruntplugin', 'Checks keys in json files', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      clioption: '-j',
      json_files_path: 'test/*.json'
    });

    grunt.log.writeln('------- '+options.json_files_path);
  });

};
