const path = require('path');
const os = require('os');

var pathObject = path.parse(__filename);

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

module.exports.currentPath = pathObject;
module.exports.totalMemory = totalMemory;
module.exports.freeMemory = freeMemory;
