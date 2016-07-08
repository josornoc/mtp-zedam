var development = './src/';
var production = './dist/';

module.exports = {

    javascript: {
        src: [
            development + 'js/libs/*.js',
            development + 'js/components/*.js',
            development + 'js/content/*.js'
        ],
        dest: production + 'js'
    }
};
