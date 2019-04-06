const search = (input, array) => {
    
    let items = []
    
    let filteredArr = array.filter(x => {
        if (x.Species.indexOf(input) === 0 && x['Common_Name'].indexOf(input) === 0){
            if (!items.includes(x.Species) && !items.includes(x['Common_Name'])){
                items.push(x.Species);
                items.push(x['Common_Name']);
                return x
            }
        }

        if (x.Species.indexOf(input) === 0){
            if (!items.includes(x.Species)){
                items.push(x.Species);
                return x
            }
        } 
        
        if(x['Common_Name'].indexOf(input) === 0){
            if(!items.includes(x['Common_Name'])){
                items.push(x['Common_Name']);
            return x
            }
        } 
    })

    return items    

}

const searchDetails = (input, array) => {
    let detailsObj = {};

    let details = array.map((x, i) => {
        if (x.Species === input){
            detailsObj['Species'] = input
            detailsObj['Common_Name'] = array[i]['Common_Name'];
            detailsObj['Family'] = array[i]['Family'];
            detailsObj['Genus'] = array[i]['Genus'];
        }

        if (x['Common_Name'] === input){
            detailsObj['Species'] = array[i]['Species']
            detailsObj['Common_Name'] = input
            detailsObj['Family'] = array[i]['Family'];
            detailsObj['Genus'] = array[i]['Genus']
        }
        
    })

    return detailsObj

}

module.exports = {
    search,
    searchDetails
}