let key = '8f57a995';
let baseUrl = `http://www.omdbapi.com/?apikey=${key}&`;


let searchInput = document.getElementById('search');
let searchButton = document.getElementById('search-button');
let resultContainer = document.getElementById('result-container');
let paginationContainer = document.getElementById("pagination-container");

//window.location.href = ""; -> Kaj je to? S tem ni delal page!

searchButton.addEventListener('click', function (event) {
    let query = searchInput.value;

    let url = baseUrl + `s=${query}`;
    getRequest(url, function(response){
        //movie list
        resultContainer.innerHTML = ""; // definira se zato da vsakic zbrise rezultate ko kliknes search
        let results = response.Search;
        console.log(response);

        results.forEach(function (element) {
            //console.log("Element: "+element);
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

        //pagination
        // HOW TO? 
        // Najprej moramo preveriti kolk strani imamo in potem za vsako stran narediti button,
        // dodati številko strani v element in ko klikneš gor ispisati ta page ven tako da v URL dodamo številko
        // strani npr. page=1 (1 je default)
        // naredi pagination < 12345 >
        //naredi da se pagination refresh-a ko vpišeš nov film :)
        //
        let amountOfPages = response.totalResults;
        let numberOfAll = document.createElement("div");
        numberOfAll.setAttribute("id", "total-results");
        numberOfAll.classList.add("col-12");
        let allResults = document.createElement("span");
        allResults.innerText = amountOfPages;
        numberOfAll.appendChild(allResults);
        resultContainer.appendChild(numberOfAll);

        let pages = amountOfPages / 10;
        console.log("Število strani (iz objekta): "+pages);

        if (amountOfPages % 10 === 0) {
            console.log("Število strani bo točno enako številu iz objekta: "+pages);
            for(let i=0; i<pages; i++) {
                let paginationItem = document.createElement("button");
                let paginationNumber = i+1;
                paginationItem.setAttribute("id", "pagination-button");
                paginationItem.classList.add("btn");
                paginationItem.classList.add("btn-primary");
                paginationItem.innerText = paginationNumber;
                paginationContainer.appendChild(paginationItem);
            }

        } else {
            console.log("Od števila strani vzami samo celo število in dodaj še en page več!");
            realPages = pages.toFixed(0);//ni kul resitev ce je stevilo npr. 100.2, vzame samo 100 :(
            for(let i=0; i<realPages; i++) {
                let paginationItem = document.createElement("button");
                let paginationNumber = i+1;
                paginationItem.setAttribute("id", "pagination-button");
                paginationItem.classList.add("btn");
                paginationItem.classList.add("btn-primary");
                paginationItem.innerText = paginationNumber;
                paginationContainer.appendChild(paginationItem);
            }
        }

        
    });// getRequest

});

function getRequest(url, callback){
    xhttpRequest('GET', url, callback); //dobimo informacije iz strežnika z GET
}

function postRequest(url, callback){
    xhttpRequest('POST', url, callback);
}

function putRequest(url, callback){
    xhttpRequest('PUT', url, callback);
}

function xhttpRequest(method, url, callback){
    let xhttp = new XMLHttpRequest(); // JS library for Http requests
    xhttp.onreadystatechange = function () { //to print result of successful request
        if (this.readyState === 4) { //request done
            if (this.status === 200) { //request completed
                callback(
                    JSON.parse(
                        this.response
                    )
                )
            } else {
                console.log(
                    'Error: '
                    + 'Status code: ' + this.status
                    + ' Something went wrong!'
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