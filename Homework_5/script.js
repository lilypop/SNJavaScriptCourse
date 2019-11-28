let key = '8f57a995';
let baseUrl = `http://www.omdbapi.com/?apikey=${key}&`;


let searchInput = document.getElementById('search');
let searchButton = document.getElementById('search-button');
let resultContainer = document.getElementById('result-container');


//window.location.href = ""; -> Kaj je to?

searchButton.addEventListener('click', function (event) {
    let query = searchInput.value;

    let url = baseUrl + `s=${query}`;
    getRequest(url, function(response){

        resultContainer.innerHTML = ""; // Zakaj se to definira?
        let results = response.Search;
        console.log(response);

        results.forEach(function (element) {
            let resultItem = document.createElement("div");
            resultItem.classList.add("col-3");
            let resultTitle = document.createElement("span")
            let resultImage = document.createElement("img")
            resultImage.setAttribute("src", element.Poster);
            resultImage.setAttribute("width", "100px");

            resultTitle.innerText = element.Title;

            resultItem.appendChild(resultImage);
            resultItem.appendChild(resultTitle);
            resultContainer.appendChild(resultItem);
        });

        let amountOfPages = response.totalResults;
        let pages = amountOfPages / 10;
        console.log(pages);

    })
});

let pagination = document.getElementById('pagination-button');

pagination.addEventListener('click', function (event) {
    
    /*getRequest(url, function(response){

        resultContainer.innerHTML = "";
        let results = response.Search;
        console.log(response);
        results.forEach(function (element) {
            let resultItem = document.createElement("div");
            let resultTitle = document.createElement("span")
            let resultImage = document.createElement("img")
            resultImage.setAttribute("src", element.Poster);
            resultImage.setAttribute("width", "50px");

            resultTitle.innerText = element.Title;

            resultItem.appendChild(resultImage);
            resultItem.appendChild(resultTitle);

            resultContainer.appendChild(resultItem);
        });
    })*/
});

function getRequest(url, callback){
    xhttpRequest('GET', url, callback);
}

function postRequest(url, callback){
    xhttpRequest('POST', url, callback);
}

function putRequest(url, callback){
    xhttpRequest('PUT', url, callback);
}

function xhttpRequest(method, url, callback){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                callback(
                    JSON.parse(
                        this.response
                    )
                )
            } else {
                console.log(
                    'Error: '
                    + 'Status code:' + this.status
                    + 'Something went wrong!'
                )
            }
        }
    }

    xhttp.open('GET', url, true);
    xhttp.send();

}


/*let key = '8f57a995';
let baseUrl = `http://www.omdbapi.com/?apikey=${key}&`;

//ko ga definiras ga lahko veckrat uporabis
let xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
    console.log(xhttp);
    if(this.readyState === 4) {
        if(this.status === 200) {
            JSON.parse(
                this.response
            );
        }
    } else {
        console.log ( "Error: "
            + "Status code " + this.status
            + "Something went wrong."

        );
    }
}

let url = baseUrl + 's=titanic&page=2';
xhttp.open('GET', url, true);
xhttp.send();*/