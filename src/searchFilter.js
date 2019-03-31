const search = (input, array) => {
    
    let items = []
    
    let filteredArr = array.filter(x => {
        if (x.Species.indexOf(input) === 0 && x['Common_Name'].indexOf(input) === 0){
            items.push(x.Species);
            items.push(x['Common_Name']);
            return x
        }

        if (x.Species.indexOf(input) === 0){
            items.push(x.Species);
            return x
        } 
        
        if(x['Common_Name'].indexOf(input) === 0){
            items.push(x['Common_Name']);
            return x
        } 
    })

    return items    

}

module.exports = search
