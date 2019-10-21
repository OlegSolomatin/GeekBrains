function Bird(speed) {
    this.dist = 0;
    this.speed = speed;
    this.fly = function () {
        this.dist += speed;
    }
}
//analog sozdaniya classov

const eagle = new Bird(100);
eagle.fly();
eagle.fly();
//kolvo obrashenii k funcii FLY daet inoi rezult
const own = new Bird(40);
own.fly();

console.log(eagle.dist);
console.log(own.dist);