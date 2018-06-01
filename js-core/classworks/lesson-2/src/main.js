let myName = 'Miroslav';
let lowName = 'miroslav'
let year = 1993;

// console.log(`${myName} born in 
// ${year}`)


//String Type upper, lower=========================================================

let upper = myName.toUpperCase();
let lower = myName.toLowerCase();

// console.log(upper, lower)

//String Type slice =========================================================


let nameUp = lowName[0].toUpperCase() + lowName[1] + lowName[2] + lowName[3] + lowName[4]+ lowName[5] + lowName[6] + lowName[7] //ДИЧЬ!!!! 

let nameUpFix = lowName[0].toUpperCase() + lowName.slice(1);

// console.log(nameUpFix)

let youtube = 'Yoube'

let youtubeSliced = `${youtube.slice(0,3)}tu${youtube.slice(-2)}` //Норм

// console.log(youtubeSliced)


//String Type split =========================================================

let splitMyName = myName.split('')
// console.log(splitMyName)

let date = '01-12-1955'.split('-')

// console.log(date)

//String Type replace =========================================================


let yahoo = 'Yahoo';

// console.log(yahoo.replace('o','@').replace('o','X'))


//String Type indexOf =========================================================

let string = 'someString'

// console.log('The avengers'.indexOf('e', 4))


//String Type includes =========================================================

let stringInc = 'someString'

// console.log(stringInc.includes('e'))

//String Type trim =========================================================

let stringTrim = '   someString   '

// console.log(stringTrim.trim())

//String Type repeat =========================================================

let stringRepeat = 'Aloe '

// console.log(stringRepeat.repeat(5))



//MATH =====================================================================

let year2018 = 2018

// console.log(year2018 % 1000)

// Math.pow(2,4) = 2 ** 4



const student = {
    skills: ['JS','React'],
    salary: '2000$'
}
