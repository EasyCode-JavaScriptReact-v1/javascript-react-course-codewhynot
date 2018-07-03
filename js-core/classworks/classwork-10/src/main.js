function Database(name){
    this.databaseName = name;
}

let db = new Database('mySql');

function Creater(arr,obj,str){
    this.myArray = arr;
    this.cars = obj;
    this.name = str;
};
let createrCopy = new Creater(['aloe','vera'],{x:10},'bla bla bla');

console.log(createrCopy)


function RandomObj (arg1,arg2,arg3) {
    if(arg1) {
        this.arg1 = arg1;
    };
    if(arg2) {
        this.arg2 = arg2;
    };
    if(arg3) {
        this.arg3 = arg3;
    };
}

let example = new RandomObj(['aloe','vera','ti','aloe'],2,{y:15});

console.log(example)


function Counter () {
    let counter = 0;
    this.counter = function () {
        return ++counter
    }
}

let myCounter = new Counter();

console.log(myCounter.counter())
console.log(myCounter.counter())
console.log(myCounter.counter())
console.log(myCounter.counter())


function Transport (color, name, doors) {
    this.color = color;
    this.name = name;
    this.doors = doors;
    // this.wheels = 4;
}

let volkswagen = new Transport('red','Lastochka',4);

Transport.prototype.beepBeep = function () {
    console.log("ALOOOOOHAAA")
}
Transport.prototype.wheels = 4;

function Bus () {
    
}

Bus.prototype = new Transport('red','Lastochka',4);


let bus = new Bus();

console.log(bus)
volkswagen.beepBeep()
bus.beepBeep()