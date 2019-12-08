

// meal input

//variables add getElementById
let var_date_time = document.getElementById("date_time");
let var_food_intake = document.getElementById("food_intake");
let var_kcal = document.getElementById("kcal");
let food_input = []; //storage for all foods - replace with local storage

//eventListeners
let btn_save = document.getElementById("btn_save");
btn_save.addEventListener("click", function(){meal_input();});


function meal_input() {
    let readLocalStorage = JSON.parse(localStorage.getItem("meal"));
    // define meal
    let meal = {date_time:var_date_time.value, food_intake: var_food_intake.value, kcal: var_kcal.value};
    
    // if there is no entry in local storage, create array with first entry
    if (localStorage.getItem("meal") == undefined) {
        food_input.push(meal);
        localStorage.setItem("meal", JSON.stringify(food_input));
        return console.log("1st Meal in DB!");
    } else { // if entry in local storage exists, add current meal to array
        food_input=readLocalStorage;
        food_input.push(meal);
        localStorage.removeItem("meal");
        localStorage.setItem("meal", JSON.stringify(food_input));
        return console.log("another Meal in DB!");
    }
};





// ZIGOV DEL
let food_results = document.getElementById("food_results")
let btn_show = document.getElementById("btn_show")
let date_input = document.getElementById("date_input")
food_input = JSON.parse(localStorage.getItem("meal"));


btn_show.addEventListener("click", function () {
    food_results.innerHTML = "";
    food_input.forEach(function(item) {
    console.log(item["food_intake"])

    if (item.date_time === date_input.value) {
        let food_item= document.createElement("p")
        food_item.innerText=(item.food_intake + "  =  " + item.kcal + "kalorij")
        food_results.appendChild(food_item);
    }

    /*else */
})
let food_e = document.getElementById("food_results").length;

if (food_e === 0) {
    let food_item= document.createElement("p")
    food_item.innerText=("No food inputs this day.")
    food_results.appendChild(food_item);
}

})


// Beni



// Lili

//eventListeners
let btnGraph = document.getElementById("btn_graph");
btnGraph.addEventListener("click", function(){showGraph();});

function showGraph() {
    var ctx = document.getElementById('graph_results').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'My ITM by months',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [30, 10, 5, 2, 20, 30, 45, 18, 50, 1, 33, 20]
            }]
        },

        // Configuration options go here
        options: {}
    });
}