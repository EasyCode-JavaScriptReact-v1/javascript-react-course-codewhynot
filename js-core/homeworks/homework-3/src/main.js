    /*
    Напишите функцию которая будет возвращать объект
    с свойством name, а значением будет первый аргумент функции
    */

    function returnFunction(param){
        let obj = {
            name: param
        }
        return  obj
    }
    let someObj = returnFunction('Aloe vera');
    console.log(someObj)


//===================================================================

    /*
    Функция будет принимать 1 аргумент - ОБЪЕКТ у которого
    будет свойство name
    и возвращать новый объект изменяя свойство name
    в большой регистр
    */
    let myObj = {
        name: 'Some object name'
    }

    function returnObj (obj){
        let up = obj.name.toUpperCase()
        let modifyObj = {
            name: up
        }        
        return modifyObj
    }
    let someObjMod = returnObj(myObj)
    console.log(someObjMod)


//===================================================================
    /*
    1. Напишите функцию которая принимает в
    качестве аргумента массив и элемент массива
    и добавляет элемент в конец массива
    */

    let arr = [];
    arr[0] = 'privet', arr[1] = 'poka', arr[2] = 'zdrastvuite'; //default values

    function addToArray(arrParam,elemParam){
        return arrParam[arrParam.length] = elemParam;
    }

    addToArray(arr,'aloe') //add aloe
    addToArray(arr,'vera') //add vera
    addToArray(arr,'how are you') //add how are you

    console.log(arr)
//===================================================================
    /*
    Напишите функцию которая получает 3 параметра
    и возвращает объект типа:
        {
        argument1: param1,
        argument2: param2,
        argument3: param3,
        }
    */
    let userNames = [{ name: 'Egor' }, { name: 'Katya' }, { name: 'Vera' }];

    function simpleObjGenerator (param1,param2,param3){
        let obj = {
            argument1: param1,
            argument2: param2,
            argument3: param3
        }
        return obj
        
    }
    let resultSimple = simpleObjGenerator('protocol', { url: '22' }, 8000)
    let resultParams = simpleObjGenerator(77,userNames,'privet kak dela chto novogo'.toUpperCase())
    console.log(resultSimple)
    console.log(resultParams)

//===================================================================
    /*
    Напишите функцию которая принимает 3 аргумента,
    третий аргумент - это объект.
    Функция создает новый объект и добавляет ключ
    это первый аргумент, а значение - второй аргумент
    Проверяет если есть свойство name в переданном объекте,
    тогда добавляет данное свойство и возвращает новый объект
    */

    var myName = { name: 'Oleg' };

    function addNameToUser(newKey, newValue, userName) {
        let objUser = {}
        if(userName.name){
            objUser.name = userName.name
        }   
        objUser[newKey] = newValue        
        return objUser
    }
    let objResult = addNameToUser('mood','happy',myName);
    let addResult = addNameToUser('surname','pupkin',{})
    let addResult2 = addNameToUser('name','vasya',{})

    console.log(objResult)
    console.log(addResult)
    console.log(addResult2)

//===================================================================

    /*
    -> @@ SUPER !
    Напишите функцию, которая будет
    возвращать 'Fizz' если передаваемый параметр кратен 3,
    'Buzz', если передаваемый параметр кратен 5,
    'FizzBuzz' - если параметер кратен 3 и 5
    Если передаваемое число не кратно 3 или 5, то вернуть указанный параметр
    */

    function fizzBuzz(param){
        if((param % 3) == 0 && (param % 5) == 0){return 'FizzBuzz'}
        else if((param % 3) == 0){ return 'Fizz'}
        else if((param % 5) == 0){ return 'Buzz' }
        else{return param}
    }
    console.log(fizzBuzz(1)) // 1
    console.log(fizzBuzz(2)) // 2
    console.log(fizzBuzz(3)) // 'Fizz'
    console.log(fizzBuzz(5)) // 'Buzz'
    console.log(fizzBuzz(15)) // 'FizzBuzz'
    console.log(fizzBuzz(21)) // 'Fizz'

//===================================================================

    /* -> @@ SUPER 2
    Напишите функцию, которая будет принимать 4 аргумента,
    последний всегда функция.
    Добавьте первые 3 аргумента в массив и вызовите переданную функцию с данным массивом
    */

    function super2(arg1, arg2, arg3, callback) {
        let array = [arg1,arg2,arg3]
        callback(array);
    }

    super2('aloe','vera','kak dela', function(arr){
        let splitMove = arr.splice(-1)
        console.log(arr,splitMove)
    })

//===================================================================
