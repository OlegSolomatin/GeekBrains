class bird {
    constructor(speed) {
        this.dist = 0;
        this.speed = speed;
    }
    fly () {
        this.dist +=100;
    }
}

const eagle = new bird(50);
eagle.fly();

const own = new bird(100);
own.fly();

console.log(Object.keys(own));