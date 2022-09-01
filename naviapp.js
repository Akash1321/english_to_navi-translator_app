let translate = document.querySelector("#translate-btn");
let english = document.querySelector("#english");
let navi = document.querySelector("#navi");

var naviUrl = "https://api.funtranslations.com/translate/navi.json";

function linkConstruct(text){
    return naviUrl + "?" + "text=" + text
}

function errorHandler(error){
    console.log("error occured", error)
    alert("The server is not responding please try after sometime")
}


translate.addEventListener("click", function eventHandle() {

    var englishInput = english.value;

fetch(linkConstruct(englishInput))
    .then(function responseHandler(response) { return response.json()})
    .then(function logData(data) {
        let Output = data.contents.translated;
        navi.innerText = Output})
    .catch(errorHandler);
            
          

    }
  

)

