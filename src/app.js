const { server } = require("./core-modules/createServer");
const { readSampleFile, writeSampleFile } = require("./introduction/index");

(function () {
  readSampleFile();
  writeSampleFile("Hello Nodejs!");
  server.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
})();
