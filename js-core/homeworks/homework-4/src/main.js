/*
* Напишите функцию которая будет принимать 1 аргумент и в зависимости от типа аргумента
* Если тип аргумента число или объект -> возвращать true
* Если тип аргумента функция -> возвращать false
* Если тип аргумента Строка и длина этой строки не равна 10 -> возвращать "длина вашей строки: <длина строки>
* Если длина 10 -> 'you win'
* */
let objCheck = {
    name: 'aloe'
};
let numbCkeck = 15;
let stringCheck = 'aloe vera lorem ipsum';
let stringTenCheck = 'aloe vera.';
let funcCheck = function(){
    return 'yes it is';
};

function check(param){
    let numOrObject = typeof param === 'number' || typeof param === 'object';
    let functionType = typeof param === 'function';
    let stringType = typeof param === 'string' && param.length != 10;
    let stingTenType = typeof param === 'string' && param.length === 10;

    if(numOrObject) return true;
    else if(functionType) return false;
    else if(stringType) return 'Длина вашей строки:' + param.length;
    else if(stingTenType) return 'you win';

    return param;
}

console.log(check(numbCkeck));
console.log(check(objCheck));
console.log(check(funcCheck));
console.log(check(funcCheck));
console.log(check(stringCheck));
console.log(check(stringTenCheck));

//==============================================================================================

/*
* Напишите функцию которая принимает 2 числа
* и возвращает массив содержащий числа между первым числом и вторым числом;
 */


 function betweenNumbers(num1,num2){
    let arr = [];
    for(let i = num1; i < num2 + 1; i++){
    arr[i] = i;
    };
    arr.splice(0,arr.indexOf(num1));
    return arr;
 }

 console.log(betweenNumbers(20,45))

//==============================================================================================


/*
 2. Перепишите задачу FizzBuzz, но с использованием цикла.
 Расчет чисел должен идти до 100
 */

function fizzBuzz100(num){    
    for(let i = 0; i < 101; i++){
        let str;
        if(i % 3 === 0 && i % 5 === 0) str ='FizzBuzz';
        else if(i % 3 === 0) str = 'Fizz';
        else if(i % 5 === 0) str = 'Buzz';
        else{str = i;}
        console.log(str);
    } 
}
fizzBuzz100();

//==============================================================================================


/*
 3. Напишите функцию которая принимает 1 аргумент - массив
 И возвращает новый массив содержащий типы значений переменных
 */

let arr = [1, null, undefined, 'str', {}, [], function() {}];

function typeCheck(param){
    let newArr = [];
    for(let i = 0; i < param.length; i++){
        newArr[i] = typeof param[i];
    }
    return newArr;
};
console.log(typeCheck(arr))

//==============================================================================================


/*
 1. @@SUPER@@. Вам дан массив array, содержащий внутри объекты.
 Напишите функцию которая внутри цикла проходится по каждому элементу массива
 И проверяет какой тип данных содержит свойство age, если тип данных NaN,
 тогда добавляет данному объекту свойство unknownAge: true
 2. На основании нового массива, создайте новую функцию, которая вернет новый массив
  содержащий все объекты содержащие свойство unknownAge: true
 */

let array = Array.from({length: 35},
    (value, index) => (index % 2 ? {age: index + 2} : {age: NaN}),
);


function solution(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        let obj = arr[i];
        let thisKey = obj.age;
        if(isNaN(thisKey)){
            thisKey.unknownAge = true;
            newArr.push(obj)
        }
    }
    return newArr;
}

console.log(solution(array))


//==============================================================================================
