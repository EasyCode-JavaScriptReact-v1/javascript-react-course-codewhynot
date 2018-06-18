'use strict';

/*
 1. Переместите 0 в конец массива, остальные числа должны остаться
 неизменными
 // concat
 example:
 [1,false,2,0,3,null,0,4,0,25] => [1, false, 2, 3, null, 4, 25, 0, 0, 0]
 [ 'a', 0, 0, 'b', null, 'c', 'd', 0, 1, false, 0, 1, 0, 3, [], 0, 1, 9, 0, 0, {}, 0, 0, 9 ] => ["a","b",null,"c","d",1,false,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0]
 [ 0, 1, null, 2, false, 1, 0 ] => [1,null,2,false,1,0,0]
 */

let arr1 = [1, false, 2, 0, 3, null, 0, 4, 0, 25];
let arr2 = [
  'a',
  0,
  0,
  'b',
  null,
  'c',
  'd',
  0,
  1,
  false,
  0,
  1,
  0,
  3,
  [],
  0,
  1,
  9,
  0,
  0,
  {},
  0,
  0,
  9
];

function moveZeroToEnd(arr) {
    let array = arr;
    let newArray  = [];
    for(let i = 0; i < array.length; i++){
        let checkIndexZero = array.indexOf(0,0);
        let takeANumbers = array.splice(checkIndexZero,1);
        newArray.push(takeANumbers[0]);
    }
    newArray.reverse();
    let all = array.concat(newArray);
    return all;
}


console.log(moveZeroToEnd(arr1));
console.log(moveZeroToEnd(arr2));

/*
 2. Верните сумму двух найменьших чисел в массиве

 [10,20,30,1,31,11,10] => 11
 [-1,0,25] => -1
 [-4,-10,25,10] => -14
 [0,200,10,25,15] => 10

 */
let arrMin1 = [10,20,30,1,31,11,10];
let arrMin2 = [-1,0,25];
let arrMin3 = [-4,-10,25,10];
let arrMin4 = [0,200,10,25,15];

function minimalNumber(arr) {
    let numbers = [];
    for(let i = 0; i < 2; i++){
        let minNumber = Math.min(...arr);
        let checkMinNumber = arr.indexOf(minNumber,0)
        let takeANumber = arr.splice(checkMinNumber,1);
        numbers.push(takeANumber[0]);
    }
    return numbers[0] + numbers[1];
}
console.log(minimalNumber(arrMin1))
console.log(minimalNumber(arrMin2))
console.log(minimalNumber(arrMin3))
console.log(minimalNumber(arrMin4))

/*
 3. Напишите функцию которая меняет местами имя и фамилию
 nameShuffler('john McClane'); => "McClane john"
 nameShuffler('Arnold Schwarzenegger'); => "Schwarzenegger Arnold"
 nameShuffler('James Bond'); => "Bond James"
 */

function nameShuffler(str) {
    let strArray = str.split(' ');
    let arrReverse = strArray.reverse();
    let strJoin = arrReverse.join(' ')
    return strJoin;
}
console.log(nameShuffler('John McClane'));
console.log(nameShuffler('Arnold Schwarzenegger'));
console.log(nameShuffler('James Bond'));

/*
 // !
 4. Напишите функцию которая принимает массив с именами и возвращает массив
 в котором каждая буква становится заглавной
 capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
 capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']
 */

let capArr1 = ['jo', 'nelson', 'jurie'];
let capArr2 = ['KARLY', 'DANIEL', 'KELSEY'];

function capMe(arr) {
    let result = [];
    arr.forEach(function(elem,index,arr){
        let fixElement = elem.toLowerCase();
        let capElement = fixElement[0].toUpperCase()
        let separateElement = fixElement.slice(1);
        let elems = `${capElement}${separateElement}`
        result.push(elems);
    });
    return result;
}
console.log(capMe(capArr1))
console.log(capMe(capArr2))


// @SUPER
/*
 1. Найдите число отсутствующее в заданной последовательности

 example:
  [1,3,5,9] => 7 (9-1) / 4 == 2
  [0,8,16,32] => 24
  [4, 6, 8, 10] => 2 // число сначала
  [0,16,24,32] => 8
 */

function random(arr) {
    
}

random([1, 3, 5, 9]);
random([0, 8, 16, 32]);
random([0, 16, 24, 32]);
random([4, 6, 8, 10]);

/*
 Задача с собеседований*

 2. Напишите функция которая преобразовывает/открывает скобки всех
 вложенных внутри массивов
 Необходимо реализовать рекурсивный фызов функции.
 Функция должна открывать любое количество внутренних массивов

 example:

  [[1,2],[3,[4]],5, 10] => [1,2,3,4,5,10]
  [25,10,[10,[15]]] => [25,10,10,15]

 */

function openBraces(arr) {}