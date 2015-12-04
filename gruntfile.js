module.exports = function(grunt) {
    var banner = ['/**',
      ' * Copyright (c) <%= new Date().getFullYear() %>',
      ' * <%= pkg.name %> - <%= pkg.description %>',
      ' * Built on <%= (new Date).toISOString().slice(0,10) %>',
      ' * ',
      ' * @version <%= pkg.version %>',
      ' * @link <%= pkg.repository.url %>',
      ' * @license <%= pkg.license %>',
      ' */',
      ''].join('\n') + '\n';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {
                maxlen: 80,
                quotmark: 'single'
            },
            dev: ['gruntfile.js', 'src/*.js'],
            app: ['src/*.js']
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: 'node_modules/mocha/',
                        src: ['mocha.*'],
                        dest: 'public/assets/',
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        cwd: 'node_modules/chai/',
                        src: ['chai.js'],
                        dest: 'public/assets/',
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        cwd: 'node_modules/sinon/pkg',
                        src: ['sinon.js'],
                        dest: 'public/assets/',
                        filter: 'isFile'
                    }
                ]
            }
        },
        concat: {
            options: {
                separator: '\n',
                banner: banner
            },
            build: {
                files: [{
                    src: ['src/**/*.js'],
                    dest: 'build/<%= pkg.name %>.js'
                }]
            }
        },
        uglify: {
            options: {
                banner: banner,
            },
            build: {
                files: {
                    'build/<%= pkg.name %>.min.js': [
                        'build/<%= pkg.name %>.js'
                    ]
                }
            }
        },
        simplemocha: {
            options: {
                globals: ['expect'],
                timeout: 3000,
                ignoreLeak: false,
                ui: 'bdd',
                reporter: 'tap'
            },
            all: {
                src: [
                    'test/*.js'
                ]
            }
        },
        watch: {
            scripts: {
                files: ['gruntfile.js', 'src/*.js', 'test/**/*.js'],
                tasks: ['development']
            }
        },
        clean: {
            build: ['./build/']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-simple-mocha');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default',
        ['jshint', 'simplemocha', 'copy', 'concat', 'uglify']
    );

    grunt.registerTask('watch', ['jshint', 'simplemocha']);

    grunt.registerTask('test', ['simplemocha']);

    grunt.registerTask('build', ['concat', 'uglify']);
};
