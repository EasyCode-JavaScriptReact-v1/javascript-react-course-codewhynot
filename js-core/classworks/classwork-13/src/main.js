// let someArr = [1,8,3,4,5];

// Array.prototype.sum = function () {
//     let aloe =  this.reduce((acc,val) => {
//        return acc + val
//     },0)
//     console.log(aloe)
// }

// someArr.sum()

//==================================================================

// class Country {
//     constructor (args) {
//         this.countryName = args.countryName;
//     }
// }

// class City extends Country {
//     constructor (args){
//         super(args);
//     }
// }

//==================================================================


// class Animal {
//     constructor ({...obj}){
//         this.paws = obj.paws;
//     }
//     roar () {
//         console.log(`Зверь с ${this.paws} рычит!`)
//     }
// }

// class Cat extends Animal {
//     constructor (obj){
//         super(obj);
//         this.name = obj.name;
//     }
//     jump () {
//         console.log(`Это животное, по имени ${this.name}, скачет на ${this.paws}-х лапах.`)
//     }
// }

// let cat = new Cat({name: 'Муцька',paws: 4});

// cat.jump()

//==================================================================

// function some1 () {
//     console.log('function #1')
// }
// function some2 () {
//     console.log('function #2')
// }
// function some3 () {
//     console.log('function #3')
// }


// setTimeout (() => {
//     some1();
// }, 5000);

// setTimeout (() => {
//     some2();
// }, 4000);

// setTimeout (() => {
//     some3();
// }, 3000);

// let timer = setInterval(() => {
//     some1();
// }, 3000);

//==================================================================

let count = 1;

let t = setInterval(() => {
    console.log(count++)
},1000)

setTimeout(() => {
    clearInterval(t)
},10000)