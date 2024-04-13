const { readSampleFile, writeSampleFile } = require('./introduction/index');

(function() {
    readSampleFile();
    writeSampleFile("Hello Nodejs!");
})();