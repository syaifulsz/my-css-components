const sass = require( 'node-sass' );

module.exports = function( grunt ) {

    // Project configuration.
    grunt.initConfig( {

        clean: {
            'dist': 'dist'
        },

        sass: {
            options: {
                includePaths: [ 'node_modules', '.' ],
                implementation: sass,
                sourceMap: true
            },
            build: {
                files: {
                    'dist/css/modal-drawer.css': [
                        'src/modal-drawer.scss'
                    ]
                }
            },
            compressed: {
                options: {
                    outputStyle: 'compressed'
                },
                files: {
                    'dist/css/modal-drawer.min.css': [
                        'src/modal-drawer.scss'
                    ]
                }
            }
        },

        watch: {
            css: {
                files: [ '**/*.{sass,scss}' ],
                tasks: [ 'sass', 'notify:css' ],
                options: {
                    spawn: false,
                    livereload: true,
                    interrupt: true
                },
            }
        },

        notify: {
            ping: {
                options:{
                    title: '@syaifulsz/bootstrap-v4-extend-modal-drawer',
                    message: 'PONG!'
                }
            },
            watch: {
                options:{
                    title: '@syaifulsz/bootstrap-v4-extend-modal-drawer',
                    message: 'Watching...'
                }
            },
            css: {
                options:{
                    title: '@syaifulsz/bootstrap-v4-extend-modal-drawer',
                    message: 'CSS Ready!'
                }
            },
            js: {
                options:{
                    title: '@syaifulsz/bootstrap-v4-extend-modal-drawer',
                    message: 'JS Ready!'
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks( 'grunt-contrib-clean' );
    grunt.loadNpmTasks( 'grunt-sass' );
    grunt.loadNpmTasks( 'grunt-contrib-watch' );
    grunt.loadNpmTasks( 'grunt-notify' );

    // Default task(s).
    grunt.registerTask( 'default', [ 'clean', 'sass', 'notify:css' ] );
};
