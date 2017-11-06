/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // check for filePath
  // if it doesn't exist, throw error
  fs.readFile(filePath, 'utf8', (error, data) => {
    if (error) {
      callback(error, null);
    } else {
      let line = data.split('\r\n')[0];
      callback(null, line);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // TODO
  request(url, function(error, response) {
    if (error) {
      callback(error, null);
    } else {
      callback(null, response.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
