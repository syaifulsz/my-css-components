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
                    'dist/bootstrap-v4-extend-button-raised.css': [
                        'src/button-raised.scss'
                    ]
                }
            },
            compressed: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'dist/bootstrap-v4-extend-button-raised.min.css': [
                        'src/button-raised.scss'
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
    grunt.loadNpmTasks( 'grunt-sass' );
    grunt.loadNpmTasks( 'grunt-contrib-watch' );

    // Default task(s).
    grunt.registerTask( 'default', [ 'clean', 'sass' ] );
};
