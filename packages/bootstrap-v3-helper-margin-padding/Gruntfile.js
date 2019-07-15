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
                    'dist/bootstrap-helper-margin-padding.css': [
                        'src/bootstrap-helper-margin-padding.scss'
                    ],
                    'dist/bootstrap-helper-margin-padding-responsive.css': [
                        'src/bootstrap-helper-margin-padding-responsive.scss'
                    ]
                }
            },
            compressed: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'dist/bootstrap-helper-margin-padding.min.css': [
                        'src/bootstrap-helper-margin-padding.scss'
                    ],
                    'dist/bootstrap-helper-margin-padding-responsive.min.css': [
                        'src/bootstrap-helper-margin-padding-responsive.scss'
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
