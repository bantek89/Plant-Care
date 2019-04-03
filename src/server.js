const http = require('http');
const router = require('./router')
const server = http.createServer(router);
const port = provess.env.PORT || 3000


server.listen(PORT);
console.log(`server up and running on local port ${PORT}`)

