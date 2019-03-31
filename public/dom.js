const inputField = document.getElementById('inputBox');

inputField.addEventListener('input', function(e){
    let searchItem = e.target.value

    newSearch(searchItem);
})

const newSearch = function(value){
    const xhr = new XMLHttpRequest();
    let searchURL = '/query' + value;

    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(xhr.response);
        }
    }

    xhr.open('GET', searchURL, true);
    xhr.send();
}