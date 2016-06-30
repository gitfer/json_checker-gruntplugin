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
    var child;

    grunt.registerMultiTask('json_checker_gruntplugin', 'Checks keys in json files', function() {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({});

     var done = this.async();
     var child = grunt.util.spawn({
         cmd: process.execPath,
         args: ['../json_checker/index.js', '-j', options.json_files_path],
     }, function(err, result, code){
         
         if(code !== 0){
          grunt.fail.fatal(err, code);
         }
         done(true);
     });
     child.stdout.pipe(process.stdout);
     child.stderr.pipe(process.stderr);
    });

};
