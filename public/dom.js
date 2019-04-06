let searchBox = document.getElementById("inputBox");

document.getElementById("inputBox").addEventListener("input", function(e) {
  let searchItem = e.target.value;

  newSearch('/query', searchItem, (xhr, value) => {
    let responseList = document.querySelector(".plantNames");

    clearList(responseList);

    let searchArray = JSON.parse(xhr.responseText).map(x => {
      console.log(x);
      return x;
    });

    searchArray.map(x => {
      let listItem = document.createElement("li");
      let button = document.createElement("button");
      button.innerText = x;
      button.addEventListener("click", e => {
        selectPlant(button.innerText);
        clearList(responseList);
      });
      listItem.appendChild(button);
      responseList.appendChild(listItem);
    });

    if (value === "") {
      console.log("search is empty");
      clearList(responseList);
    }
  });
});

document.getElementById("submit").addEventListener("click", function(e) {
  e.preventDefault();

  let submitItem = searchBox.value;
  if (searchBox.value !== ''){
    newSearch('/plants=', submitItem, (xhr, value) => {
      let data = JSON.parse(xhr.responseText);
      let displayData = document.getElementById('dataFill')
  
      console.log(data['Family'])
      
      appendElement('Family', data['Family']);
      appendElement('Genus', data['Genus']);
      appendElement('Species', data['Species']);
      appendElement('Common name', data['Common_Name']);
    })
  } else {
      alert('please search for a plant!')
  }

 

});

const appendElement = (element, value) => {
    let key = document.getElementById(element);
    key.innerText = value;
}


const newSearch = function(endpoint, value, cb) {
  const xhr = new XMLHttpRequest();
  let searchURL = endpoint + value;

  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     cb(xhr, value);
    }
  };

  xhr.open("GET", searchURL, true);
  xhr.send();
};

const clearList = responseList => {
  while (responseList.firstChild) {
    responseList.removeChild(responseList.firstChild);
  }
};

const selectPlant = name => {
  searchBox.value = name;
};
