const handler = require('./handlers');
const queryHandler = require('./queryHandler')


const router = (request, response) => {
    const url = request.url;
    
    if (url === '/'){
        handler.handleHomeRoute(request, response);
    } else if (url.indexOf('/public') !== -1) {
       handler.handlePublic(request, response, url);
    } else if (url.indexOf('/query') !== -1) {
       queryHandler(request, response, url)
    } else {
       response.writeHead(404, {'Content-Type' : 'text/html'});
       response.end('<h1>404 not found</h1>');
    }
}

module.exports = router;