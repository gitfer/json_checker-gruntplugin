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
                    json_files_path: '../json_checker/test/*.json'
                }
            }
        },

        // Unit tests.
        nodeunit: {
            tests: ['test/*_test.js']
        }

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // By default, lint and run all tests.
    grunt.registerTask('default', ['json_checker_gruntplugin']);

};
