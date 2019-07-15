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
                    'dist/bootstrap-helper-blocks.css': [
                        'src/bootstrap-helper-blocks.scss'
                    ],
                    'dist/bootstrap-helper-blocks-responsive.css': [
                        'src/bootstrap-helper-blocks-responsive.scss'
                    ]
                }
            },
            compressed: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'dist/bootstrap-helper-blocks.min.css': [
                        'src/bootstrap-helper-blocks.scss'
                    ],
                    'dist/bootstrap-helper-blocks-responsive.min.css': [
                        'src/bootstrap-helper-blocks-responsive.scss'
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
