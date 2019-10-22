const bird = { "fly": true};

function Eagle(firstname, secondname) {
    this.name = firstname;
    this.secondname = secondname;
    this.speed = 100;
}

Eagle.prototype = bird;

const eagle1 = new Eagle("Alexandr","Orlov");

console.log(eagle1);
console.log(eagle1.fly)
