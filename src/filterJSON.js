// const objectifyPlants = json => {
//   const obj =  JSON.parse(json);
//   return obj
// }

const filterPlants = obj => {
    let filteredPlants = [];

    obj['data'].map((x, i) => {
        let completeObj = {}

            for (let j=0; j<Object.keys(obj.data[i]).length; j++){            
            if (Object.values(obj.data[i])[j] !== '' ){
                completeObj[Object.keys(obj.data[i])[j]] = Object.values(obj.data[i])[j].toLowerCase();
                }
            }
    
        if(Object.keys(completeObj).length === 4){
        filteredPlants.push(completeObj);
        }
    });
    return filteredPlants
}

module.exports = {
    // objectifyPlants,
    filterPlants
}
