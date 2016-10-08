module.exports = function(grunt) {
    grunt.initConfig({
        karma: {
            unit: {
                configFile: 'karma-unit.conf.js'
            }
        },
        serve: {
            options: {
                serve: {
                    path: './app/'
                },
                port: 9000
            },
        }
    });
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-serve');
};