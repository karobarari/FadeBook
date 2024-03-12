const fs = require("fs");

exports.fetchEndpoints = (callback) => {
  fs.readFile(`${__dirname}/../endpoints.json`, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading endpoints file:", err);
      callback(err, null);
      return;
    }
    callback(null, JSON.parse(data));
  });
};
