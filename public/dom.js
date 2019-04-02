let searchBox = document.getElementById("inputBox");

document.getElementById("inputBox").addEventListener("input", function(e) {
  let searchItem = e.target.value;

  newSearch(searchItem);
});

document.getElementById("submit").addEventListener("click", function(e) {
  e.preventDefault();

  let submitItem = searchBox.value;
  console.log(submitItem);
  if (searchBox.value !== ''){
    document.getElementById("dataContainer").scrollIntoView();
  } else {
      alert('please search for a plant!')
  }
});

document.getElementById("again").addEventListener("click", function(e) {
  document.getElementById("homepage").scrollIntoView();
});

const newSearch = function(value) {
  const xhr = new XMLHttpRequest();
  let searchURL = "/query" + value;

  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
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
