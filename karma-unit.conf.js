module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],
        browsers: ['Safari'],
        files: [
            'spec/unit/*.js'
        ]
    });
}