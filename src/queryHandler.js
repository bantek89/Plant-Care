const search = require('./searchFilter');
const filters = require('./filterJson');
const objJSON = require('./JSON/plants.json');

const allPlantsArray = filters.filterPlants(objJSON);

const queryHandler = function (request, response, url){
    let value = url.split('/query')[1];
    let results = search(value, allPlantsArray);

    let tenResults = results.slice(0, 10)

    response.end(JSON.stringify(tenResults));
}

module.exports = queryHandler;