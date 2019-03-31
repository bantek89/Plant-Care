const objectifyPlants = JSON => {
  const obj =  JSON.parse(JSON);
  return obj
}

const filterPlants = obj => {
    let filteredPlants = [];

    for (let i=0; i <obj.data.length; i++){
        let completeObj = {}

            for (let j=0; j<Object.keys(obj.data[i]).length; j++){            
            if (Object.values(obj.data[i])[j] !== '' ){
                completeObj[Object.keys(obj.data[i])[j]] = Object.values(obj.data[i])[j]
                }
            }
    
        if(Object.keys(completeObj).length === 4){
        filteredPlants.push(completeObj);
        }
    }
    return filteredPlants
}

module.exports = {
    objectifyPlants,
    filterPlants
}
