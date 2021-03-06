const fs = require('fs');
const path = require('path');

const handleHomeRoute = (request, response) => {
    const filePath = path.join(__dirname, '..', 'public', 'index.html');
        fs.readFile(filePath, (error, file) => {
            if (error){
                console.log(error);
                response.writeHead(500, {'Content-Type' : 'text/html'});
                response.end('<h1>Sorry, we\'ve had a problem on our end<h1>');
            } else {
                response.writeHead(200, {'Content-Type' : 'text/html'});
                response.end(file);
            }
        });
};

const handlePublic = (request, response, url) => {
    const ext = path.extname(url)
    const extensionType = {
        '.html' : 'text/html',
        '.css' : 'text/css',
        '.js' : 'application/javascript',
        '.png' : 'image/png',
        '.svg' : 'image/svg'
    }
    
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
}

module.exports = {
    handleHomeRoute,
    handlePublic
}