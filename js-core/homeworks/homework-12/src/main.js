//'use strict';

/*
 * TASK ! ! !
 * Сделайте пожалуйста с теми навыками которые у вас есть ТЕЛЕФОННЫЙ СПРАВОЧНИК
 *
 * Task 0
 *
 * Создайте функцию конструктор Http, которая будет иметь 2 метода
 *
 * createServer() - принимает один аргумент функцию с двумя параметрами ctx и next
 * ctx: Object {
 *   req: Object
 *     PORT: number
 *     url: string
 *   res: Object
 *     status: number,
 *     message: string,
 *     header: Object {
 *       content-type:application/json
 *       }
 *   }
 * next: Function
 *
 *
 * при вызове listen(PORT, host) - в консоле должна отобразится надпись
 * "Server running on https://host:port"
 * и вызваться переданная в createServer функция
 *
 *
 * методы нужно вызывать через chain
 * после вызова метода listen() - должна вызываться переданная в createServer
 * первая функция и возвращать объект и функцию
 *
 * */


class Http{
  constructor () {
    this.ctx = {
      req :{
        PORT: 8080,
        url: 'localhost'
      },
      res: {
        status: 0,
        message: 'Server status',
        header: {
          type: 'application/json'
        }
      }
    };
    this.next = function () {
      console.log(`${this.ctx.res.message} is ${this.ctx.res.status} - from function "next()"`);
    };
  }
  createServer (fn) {
    this.func = function (){
      return fn(this.ctx, this.next());
    };
    return this;
  }
  listen (PORT, host) {
    console.log(`Server running on http://${host}:${PORT}`);
    this.func();
    return this
  }
}


const server = new Http().createServer(function(ctx, next) {
  console.log(ctx);
}).listen(3000, 'localhost');


// TASK 1
// Создать класс Human, у которого будут свойства обычного человека:
// имя, возраст, пол, рост, вес.
// Используя прототипное наследование создать дочерние классы Worker
// (дописать в них поля места работы, зарплата, метод "работать")
// и Student (дописать поля места учебы, стипендией, метод "смотреть сериалы")
//
// Создать несколько экземпляров классов Worker и Student, вывести их в консоль.
// Убедиться что они имеют поля родительского класса Human


class Human {
  constructor (obj) {
    this.name = obj.name;
    this.age = obj.age;
    this.gender = obj.gender;
    this.height = obj.height;
    this.weight = obj.weight;
  }
}

class Worker extends Human {
  constructor (obj) {
    super(obj)
    this.workPlace = obj.workPlace;
    this.salary = obj.salary; 
  }
  toWork () {
    console.log(`${this.name} is work, right now.`);
  }  
}

class Student extends Human {
  constructor (obj) {
    super(obj)
    this.studyPlace = obj.studyPlace;
    this.scholarship = obj.scholarship;
  }  
  toWatchShow () {
    console.log(`${this.name} is watching the show.`);
  }
}

let vasya = new Human({name: 'Vasya', age: 24, gender: 'Male', height: 182, weight: 72});
let grisha = new Worker({name: 'Grisha', age: 20, gender: 'Male', height: 178, weight: 65, salary: '2500$', workPlace: 'Microsoft'});
let ira = new Student({name: 'Ira', age: 19, gender: 'Female', height: 165, weight: 50, scholarship: '500$', studyPlace: 'Oksford '});

console.log(vasya);

console.log(grisha);
grisha.toWork();

console.log(ira);
ira.toWatchShow();



// @SUPER
/*
 * TASK 0
 * Создайте функцию обертку над другой функцией
 * Каждый раз при вызове внутренней функции в консоле будут отображаться аргументы функции
 * которую мы обернули
*/
let some = (a,b) => a + b;
let decorator = (fn) => {
  return (...args) => {
    console.log(args);
    return fn(...args)
  }
}
let resultDecorator = decorator(some)
console.log(resultDecorator(10,20))

