let numberOfSeries;

function startApp() {
    numberOfSeries = +prompt("Nechta serial ko'rdingiz");
}

while(numberOfSeries == "" || numberOfSeries == null || isNaN(numberOfSeries));
    numberOfSeries = +prompt("Nechta serial ko'rdingiz");
startApp();


const seriesDB = {
    count: numberOfSeries,
    series: {},
    actors: {},
    genres: [],
    privat: false
};


function privet() {
for( let i = 0; i < 2; i++) {
    const a = prompt(`Oxirigi ko'rgan serialingiz ${i}`);
    const b = +prompt("Necha baho berasiz");
    

    if(a != null && b != null && a != "" && b != "" ) {
        console.log("done");
        seriesDB.series[a] = b;
    } else {
        console.log("Error");
        i--;
    }
}
}

privet();



function aktyorlar() {
    for(let i = 0; i < 3; i++) {
        const act = prompt("Eng yaxshi ko'tgan aktyorlariz");
        seriesDB.actors[i] = act;
    }
}

aktyorlar();





function izmer () {
    if(numberOfSeries < 5) {
        console.log("Siz kam seril ko'ribsiz");
        } else if (numberOfSeries >= 5 && numberOfSeries < 10){
        console.log("Siz o'rtacha serial ko'ribsiz");
        } else if (numberOfSeries < 15) {
            console.log("Siz juda ham ko'p serial ko'rar ekansiz");
        }
}

izmer();

function showDb() {
    if(!seriesDB.privat){
        console.log(seriesDB);
    }
}

showDb();