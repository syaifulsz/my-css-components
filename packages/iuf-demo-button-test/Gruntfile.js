module.exports = function( grunt ) {

    // Project configuration.
    grunt.initConfig( {

        clean: {
            'dist': 'dist'
        },

        sass: {
            options: {
                update: true
            },
            build: {
                files: {
                    'dist/iuf-demo-button.css': [
                        'src/iuf-demo-button.scss'
                    ]
                }
            },
            compressed: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'dist/iuf-demo-button.min.css': [
                        'src/iuf-demo-button.scss'
                    ]
                }
            }
        },

        watch: {
            css: {
                files: [ '**/*.{sass,scss}' ],
                tasks: [ 'sass' ],
                options: {
                    spawn: false,
                    livereload: true,
                    interrupt: true
                },
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks( 'grunt-contrib-clean' );
    grunt.loadNpmTasks( 'grunt-contrib-sass' );
    grunt.loadNpmTasks( 'grunt-contrib-watch' );

    // Default task(s).
    grunt.registerTask( 'default', [ 'clean', 'sass' ] );
};
