const fs = require('node:fs');
const path = require('node:path');

function readSampleFile() {
  const sampleFilePath = path.join(
    __dirname,
    '../assets',
    'files',
    'sampleRead.txt',
  );
  fs.readFile(sampleFilePath, (error, fileAsBuffer) => {
    console.log(error, fileAsBuffer);
  });
}

function writeSampleFile(content) {
  if (!content?.length) return;
  const sampleFilePath = path.join(
    __dirname,
    '../assets',
    'files',
    'sampleWrite.txt',
  );
  fs.writeFile(sampleFilePath, content, (error) => {
    console.log(error);
  });
}

module.exports = {
  readSampleFile,
  writeSampleFile,
};
