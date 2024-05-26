const path = require("path");
const getRootPath = () => {
  return path.dirname(require.main.filename);
};

const serverPath = () => {
  return path.resolve(getRootPath(), "expressjs");
};

module.exports = {
  getRootPath,
  serverPath,
};
