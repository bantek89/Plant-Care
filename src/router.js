const fs = require('fs');
const path = require('path')
const extensionType = {
    '.html' : 'text/html',
    '.css' : 'text/css',
    '.js' : 'application/javascript',
    '.png' : 'image/png',
    '.svg' : 'image/svg'
}

const router = (request, response) => {
    const url = request.url;
    const ext = path.extname(url)

    if (url === '/'){
        const filePath = path.join(__dirname, '..', 'public', 'index.html');
        fs.readFile(filePath, (error, file) => {
            if (error){
                console.log(error);
                response.writeHead(500, {'Content-Type' : 'text/html'});
                response.end('<h1>Sorry, we\'ve had a problem on our end<h1>')
            } else {
                response.writeHead(200, {'Content-Type' : 'text/html'});
                response.end(file);
            }
        })
    } else if (url.indexOf('public') !== -1) {
        const filePath = path.join(__dirname, '..', url);
        fs.readFile(filePath, (error, file) => {
            if (error){
                response.writeHead(404, {'Content-Type' : 'text/html'});
                response.end('<h1>404 file note found<h1>')
            } else {
                response.writeHead(200, {'Content-Type' : extensionType[ext]});
                response.end(file);
            }
        })
    } else {
       response.writeHead(404, {'Content-Type' : 'text/html'});
       response.end('<h1>404 not found</h1>');
    }
}

module.exports = router;