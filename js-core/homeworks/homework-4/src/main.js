/*
* Напишите функцию которая будет принимать 1 аргумент и в зависимости от типа аргумента
* Если тип аргумента число или объект -> возвращать true
* Если тип аргумента функция -> возвращать false
* Если тип аргумента Строка и длина этой строки не равна 10 -> возвращать "длина вашей строки: <длина строки>
* Если длина 10 -> 'you win'
* */
let obj = {
    name: 'aloe'
};
let num = 15;
let stringALotLength = 'aloe vera lorem ipsum';
let stringWithLength10 = 'aloe vera.';
let func = function(){
    return 'yes it is';
};

function check(param){
    let isNumOrObject = typeof param === 'number' || typeof param === 'object';
    let isFunction = typeof param === 'function';
    let isString = typeof param === 'string';
    let stringLength10 = param.length === 10;
    let stringLengthNot10 = param.length != 10;
    if(isNumOrObject){
        return true;
    }
    else if(isFunction){
        return false;
    }
    else if(isString && stringLengthNot10){
        return 'Длина вашей строки:' + param.length;
    }
    else if(isString && stringLength10){
        return 'you win';
    }
    return param;
};

console.log(check(obj));
console.log(check(num));
console.log(check(stringALotLength));
console.log(check(stringWithLength10));
console.log(check(func));
//==============================================================================================
/*
* Напишите функцию которая принимает 2 числа
* и возвращает массив содержащий числа между первым числом и вторым числом;
 */
 function betweenNumbers(number1,number2){
    let array = [];
    for(let i = number1; i < number2 +1; i++){
        array[i - number1] = i;
    }    
    return array;
 };
 console.log(betweenNumbers(25,64));
//==============================================================================================
/*
 2. Перепишите задачу FizzBuzz, но с использованием цикла.
 Расчет чисел должен идти до 100
 */
function fizzBuzz100(num){    
    let str;
    for(let i = 0; i < 101; i++){        
        if(i % 3 === 0 && i % 5 === 0){
            str ='FizzBuzz';
        }
        else if(i % 3 === 0){
            str = 'Fizz';
        }
        else if(i % 5 === 0){
            str = 'Buzz';
        }
        else{
            str = i;
        }
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
    let newArray = [];
    for(let i = 0; i < param.length; i++){
        newArray[i] = typeof param[i];
    }
    return newArray;
};
console.log(typeCheck(arr));
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
    let newArray = [];
    for(let i = 0; i < arr.length; i++){
        let obj = arr[i];
        let objKey = obj.age;
        if(isNaN(objKey)){
            objKey.unknownAge = true;
            newArray.push(obj);
        }
    };
    return newArray;
}
console.log(solution(array));
//==============================================================================================
