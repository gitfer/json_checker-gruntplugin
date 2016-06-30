/*
 * json_checker-gruntplugin
 * https://github.com/f.rota/json_checker-gruntplugin
 *
 * Copyright (c) 2016 Federico Rota
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        // Configuration to be run (and then tested).
        json_checker_gruntplugin: {
            default_options: {
                options: {
                    json_files_path: '../json_checker/test/*.json',
                    json_checker_path: './node_modules/json_checker/index.js'
                }
            }
        }

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // By default, lint and run all tests.
    grunt.registerTask('default', ['json_checker-gruntplugin']);

};
