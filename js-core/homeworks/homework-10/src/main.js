/*
 *
 * Задача 0
 *
 * Что вернет выражение z(x) ?
 * Напишите ответ своими словами как вы понимаете
 * В консоле не смотрите, сначала напишите, после проверьте себя
 *
 * */

let y = 5;
let x = () => y;

let z = t => {
  let y = 5;
  t();
};
// console.log(y);

z(x); // что вернет

//===========================================================================
/*

    console.log на 18-й строке покажет число 5. 
    И это число показывается из за переменной которая объявлена на 11ой строке.

    z(x) - вернет undefined;
*/
//===========================================================================





/*
 *
 * TASK 1
 * Создайте функцию которая будет превращать
 * передаваемую строку в html тэг
 *
 *
 * */

let $ = function(arg) {
    return `<${arg}>` + `</${arg}>`
};

let createBODY = $('body');
let createDIV = $('div');
// console.log(createBODY); // <body></body>
// console.log(createDIV); // <div></div>

/*
 *
 * TASK 2
 *
 * Создайте объект к которому можно будет применить любое число вызовов
  // obj.method().method().method()
  ---------------
 *  Передаваемое значение должно возвращаться в виде html тэгов (TASK 1)
 *  Передаваемые аргументы должны быть только в виде строки
 * */

var ezjQuery = {
    add: add,    
    saveState: saveState,
    render: render,
    state: []
};
console.log(ezjQuery.add('body').add('div').add('ul').render());

function add(param) {
    
    this.saveState($(param));
    return this;
}

function saveState(param){
    let state = this.state;
    let save = function(some){
        state.push(some);
    };
    return save(param);
}


function render(){
    return this.state;
}


/*
 *
 * TASK 3
 * Доработйте метод add чтобы на каждом вызове следующий
 * тэг помещался внутри предыдущего !
 ---
 * И добавьте объекту ezjQuery метод render, который будет возвращать
 * сгенерированную строку
 -----
 * Методу add - второй параметр, который будет размещать
 * информацию внутри тэга
 *
 */

// example
// var helloList = ezjQuery
//   .add('body') // <body></body>
//   .add('div') // <body><div></div></body>
//   .add('ul') // <body><div><ul></ul></div></body>
//   .add('li', 'Hello') //<body><div><ul><li>Hello</li></ul></div></body>
//   .render();
// console.log(helloList); // <body><div><ul><li>Hello</li></ul></div></body>
// //  Обратите внимание, что после вызова render создание строки началось сначала

// var bodyDiv = ezjQuery
//   .add('body') //<body></body>
//   .add('div') //<body><div></div></body>
//   .render();
// console.log(bodyDiv); //<body><div></div></body>

// Для выполнивших все задания
// сделайте document.write(helloList) увидите результат :)

// @SUPER
/*
 * Переименуйте объект ezjQuery в $.
 * Создание перевого метода должено быть без метода
 *
 * $('body').add('li', 'hi').render() // <body><li>hi</li></body>
 *
 * */