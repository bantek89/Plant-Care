const search = require('./searchFilter');
const filters = require('./filterJson');
const objJSON = require('./JSON/plants.json');

const allPlantsArray = filters.filterPlants(objJSON);

const queryHandler = function (request, response, url){
    let value = url.toLowerCase().split('/query')[1];
    let results = search(value, allPlantsArray);
    
    let choppedResults = results.slice(0, 5)

    response.end(JSON.stringify(choppedResults));
}

module.exports = queryHandler;