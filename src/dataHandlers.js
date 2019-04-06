const search = require('./searchFilter');
const filters = require('./filterJson');
const objJSON = require('./JSON/plants.json');

const allPlantsArray = filters.filterPlants(objJSON);

const queryHandler = function (request, response, url){
    let value = url.toLowerCase().split('/query')[1];
    let results = search.search(value, allPlantsArray);
    let choppedResults = results.slice(0, 5)

    response.end(JSON.stringify(choppedResults));
}

const submitHandler = function (request, response, url){
    let value = url.toLowerCase().split('/plants=')[1];
    let requestedPlantDetails = search.searchDetails(value, allPlantsArray);

    console.log(JSON.stringify(requestedPlantDetails))
    response.end(JSON.stringify(requestedPlantDetails));
}


module.exports = {
    queryHandler,
    submitHandler
};