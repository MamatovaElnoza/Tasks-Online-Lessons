// function Human(name, age, job) {
//     this.name = name;
//     this.
// }





function Car(brand, color) {
    this.brand = brand;
    this.color = color;
    // Not recommended
    // startEngine() {
    // console.log(`Starting ${this.brand} with ${this.color} color`);
    // }
}
Car.prototype.startEngine = function () {
    console.log(`Starting ${this.brand} with ${this.color} color`);
    Car.prototype.ElnozasCar = function () {
        console.log(`Elnoza's ${this.brand} car's color is ${this.color} !!!`);
    }
}
const bmw = new Car('bmw', 'black');
bmw.startEngine();
bmw.ElnozasCar();