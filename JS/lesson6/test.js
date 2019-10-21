const rabbit = {                                                                            //Object
    "name": "Oleg",
    "speed": 50,
    "color": "grey",
    "getDis2": function (interval) { return interval * this.speed;}                       //Metod "this" обращается к перемоенной в объекте
};

function getDis(interval) {                                                                 //Function
    return interval * rabbit.speed;
}

console.log(rabbit.getDis2(30));