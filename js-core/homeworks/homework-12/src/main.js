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


function Http() {
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
    console.log(`${this.ctx.res.message} is ${this.ctx.res.status} - from function "next()" `);
  }
}

Http.prototype.createServer = function(fn) {
  this.func = function (){
    return fn(this.ctx, this.next());
  };
  return this;
}

Http.prototype.listen = function(PORT, host) {
  console.log(`Server running on http://${host}:${PORT}`);
  this.func();
  return this
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





function Human (obj) {  
  this.name = obj.name;
  this.age = obj.age;
  this.gender = obj.gender;
  this.height = obj.height;
  this.weight = obj.weight;
}
function Worker (obj) {
  Human.apply(this, ...obj);
}

let newWorker = new Worker({name: 'Aloe', age: 24, gender: 'Male', height: 182, weight: 72})

let vasya = new Human({name: 'Aloe', age: 24, gender: 'Male', height: 182, weight: 72})

console.log(newWorker)

// @SUPER

/*
 *
 * TASK 0
 * Создайте функцию обертку над другой функцией
 * Каждый раз при вызове внутренней функции в консоле будут отображаться аргументы функции
 * которую мы обернули
 *
*/