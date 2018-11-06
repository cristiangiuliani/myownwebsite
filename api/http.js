const http = require('http');

const server = http.createServer((req, res)=>{
	if(req.url === '/'){
		res.write('Hello');
		res.end;
	}
	if(req.url === '/examples'){
		res.write('Examples');
		res.end;
	}
});

server.listen(8282);

console.log('listening on port 8282...');
