'use strict';

var ogel = require('xp-ogel');

module.exports = function(grunt){
    grunt.registerMultiTask('ogel', 'Inject templates into your flat html files', function(){
        var options = this.options({
            src: '',
            dest: '',
            templateDir: ''
        });

        ogel.build(options);
  });
};