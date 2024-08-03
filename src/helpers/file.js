const fs = require('fs');
const path = require('path');

const readFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, rawData) => {
      if (err) return reject(err);
      const data = JSON.parse(rawData);
      return resolve(data);
    });
  });
};

const writeFile = (savingPath, data = {}) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path.resolve(savingPath), JSON.stringify(data), (err) => {
      if (err) return reject(err);
      return resolve();
    });
  });
};
module.exports = {
  readFile,
  writeFile,
};
