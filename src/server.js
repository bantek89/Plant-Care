let http = require('http');
let server = http.createServer();

server.listen(3000, function(){
    console.log('Sever is listening on port 3000. Ready to accept requests!');
});

