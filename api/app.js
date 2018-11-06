const example = require('./examples');

const EventEmitter = require('events');
const Logger = require('./logger');
const logger = new Logger();

console.log(example.currentPath);
console.log(`Total Memory ${example.totalMemory}`);
console.log(`Free Memory ${example.freeMemory}`);


logger.on('messageLogged', (arg) => {
	console.log('Listener called', arg);
});
logger.log('message');
