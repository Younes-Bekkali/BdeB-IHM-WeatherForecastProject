function loadData() {
    var table = document.getElementById('tableTemperatures');
    fetch('http://localhost:3000/temperatures')
        .then(resp => {
            return resp.json();
        })
        .then(temperatures => { //temperatures est un tables d'objets en mémoire
            //traitement
            for (let index = 0; index < temperatures.length; index++) {
                const oneTemperature = temperatures[index];
                let tr = document.createElement('tr');
                //colonne 1
                let td1 = document.createElement('td');
                td1.innerHTML = oneTemperature.DateDuJour; // afficher un prénom
                tr.appendChild(td1);

                //colonne 2
                let td2 = document.createElement('td');
                td2.innerHTML = oneTemperature.Temp; // afficher un nom
                tr.appendChild(td2);

                //colonne 3
                let td3 = document.createElement('td');
                td3.innerHTML = oneTemperature.MinTemp; // afficher une note
                tr.appendChild(td3);

                //colonne 4
                let td4 = document.createElement('td');
                td4.innerHTML = oneTemperature.MaxTemp; // afficher une note
                tr.appendChild(td4);

                table.appendChild(tr);
            }
        })
}



// Date.prototype.addDays = function (days) {
//     const date = new Date(this.valueOf());
//     date.setDate(date.getDate() + days);
//     return date;
// };
// Today date
function todayDate() {
    var today = new Date();
    
    return today;
}

//Add 3 days TO NOW
function ThreeDaysFromNow() {
    var date = new Date();
    date.setDate(date.getDate() + 2);
    return date;    
}

// Add 7 Days to NOW
function addSevenDays() {
var date = new Date();
date.setDate(date.getDate() + 6);
return date;
}

//Add Two Weeks to NOW
function addTwoWeeks() {
    var date = new Date();
    date.setDate(date.getDate() + 13);
    return date;
}



// const dateNow = new Date();
// // const date7 = dateNow.addDays(7);

// console.log("Today: " + formatDate(dateNow));
// console.log("In Three days : "+ formatDate(dateNow.addDays(3)));
// console.log("In one week : "+ formatDate(dateNow.addDays(7)));
// console.log("In in one month: "+ formatDate(dateNow.addDays(30)));
// Today = formatDate(dateNow);
 

// console.log("In Three days : "+ formatDate(dateNow.addDays(3)));
// console.log("In one week : "+ formatDate(dateNow.addDays(7)));
// console.log("In in one month: "+ formatDate(dateNow.addDays(30)));

//Format date
function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [month, day, year].join('/');
}



// fetch('http://localhost:3000/temperatures')
//     .then(resp => {
//         return resp.json();
//     })
//     .then(temperatures => { //temperatures est un tables d'objets en mémoire
//         //traitement
//         for (let index = 0; index < temperatures.length; index++) {
//             const oneTemperature = temperatures[index];
//             if (oneTemperature.DateDuJour < Today) {
//                 console.log("it worked");
//         }
//     }
// })

// if ("10/25/2021" < Today) {
//     console.log("it worked");
// } 
//  if("11/02/2020" > Today) {
//     console.log("it doesnt again");
// }

// var dateA = new Date("2/12/2021");
// var dateB = new Date("8/24/2020");
// dateA = parseInt(dateA.replaceAll("-", ""));
// dateB = parseInt(dateB.replaceAll("-", ""));

// if (dateA > dateB) {
//     console.log("A IS LATER " + dateA) 
// } else { 
    
//     console.log("B IS LATER OR EQUAL : " + dateB) }
//  function earlierThan(dateA, dateB) {
//     return dateA.getTime() < dateB.getTime();
// }
//Load data of three days
function loadDataThreeDays() {
    var table = document.getElementById('tableTemperatures');
    fetch('http://localhost:3000/temperatures')
        .then(resp => {
            return resp.json();
        })
        .then(temperatures => { //temperatures est un tables d'objets en mémoire
            //traitement
            for (let index = 0; index < temperatures.length; index++) {
                const oneTemperature = temperatures[index];
                let temperatureDate = new Date(oneTemperature.DateDuJour);
                let todayDate = new Date();
                
                if(temperatureDate >= todayDate && temperatureDate <= ThreeDaysFromNow()) {
                let tr = document.createElement('tr');
                //colonne 1
                let td1 = document.createElement('td');
                td1.innerHTML = oneTemperature.DateDuJour; // afficher un prénom
                tr.appendChild(td1);

                //colonne 2
                let td2 = document.createElement('td');
                td2.innerHTML = oneTemperature.Temp; // afficher un nom
                tr.appendChild(td2);

                //colonne 3
                let td3 = document.createElement('td');
                td3.innerHTML = oneTemperature.MinTemp; // afficher une note
                tr.appendChild(td3);

                //colonne 4
                let td4 = document.createElement('td');
                td4.innerHTML = oneTemperature.MaxTemp; // afficher une note
                tr.appendChild(td4);

                table.appendChild(tr);
            }
        }
        })
}

//Load data of seven days
function loadDataSevenDays() {
    var table = document.getElementById('tableTemperatures');
    fetch('http://localhost:3000/temperatures')
        .then(resp => {
            return resp.json();
        })
        .then(temperatures => { //temperatures est un tables d'objets en mémoire
            //traitement
            for (let index = 0; index < temperatures.length; index++) {
                const oneTemperature = temperatures[index];
                let temperatureDate = new Date(oneTemperature.DateDuJour);
                let todayDate = new Date();
                
                if
                (temperatureDate == todayDate || (temperatureDate >= todayDate && temperatureDate <= addSevenDays())) {
                let tr = document.createElement('tr');
                //colonne 1
                let td1 = document.createElement('td');
                td1.innerHTML = oneTemperature.DateDuJour; // afficher un prénom
                tr.appendChild(td1);

                //colonne 2
                let td2 = document.createElement('td');
                td2.innerHTML = oneTemperature.Temp; // afficher un nom
                tr.appendChild(td2);

                //colonne 3
                let td3 = document.createElement('td');
                td3.innerHTML = oneTemperature.MinTemp; // afficher une note
                tr.appendChild(td3);

                //colonne 4
                let td4 = document.createElement('td');
                td4.innerHTML = oneTemperature.MaxTemp; // afficher une note
                tr.appendChild(td4);

                table.appendChild(tr);
            }
        }
        })
        
}

//Load data of two weeks
function loadDataTwoWeeks() {
    var table = document.getElementById('tableTemperatures');
    fetch('http://localhost:3000/temperatures')
        .then(resp => {
            return resp.json();
        })
        .then(temperatures => { //temperatures est un tables d'objets en mémoire
            //traitement
            for (let index = 0; index < temperatures.length; index++) {
                const oneTemperature = temperatures[index];
                let temperatureDate = new Date(oneTemperature.DateDuJour);
                let todayDate = new Date();
                
                if(temperatureDate >= todayDate && temperatureDate <= addTwoWeeks()) {
                let tr = document.createElement('tr');
                //colonne 1
                let td1 = document.createElement('td');
                td1.innerHTML = oneTemperature.DateDuJour; // afficher un prénom
                tr.appendChild(td1);

                //colonne 2
                let td2 = document.createElement('td');
                td2.innerHTML = oneTemperature.Temp; // afficher un nom
                tr.appendChild(td2);

                //colonne 3
                let td3 = document.createElement('td');
                td3.innerHTML = oneTemperature.MinTemp; // afficher une note
                tr.appendChild(td3);

                //colonne 4
                let td4 = document.createElement('td');
                td4.innerHTML = oneTemperature.MaxTemp; // afficher une note
                tr.appendChild(td4);

                table.appendChild(tr);
            }
        }
        })
}

