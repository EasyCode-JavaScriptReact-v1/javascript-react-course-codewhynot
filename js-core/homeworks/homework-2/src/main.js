/*
 1. Составить предложение из нижестоящих переменных:
 "Сколько нужно программистов чтобы сделать проект ? 1, 25, команда"
 */

let numbers = [25, 1];
let project = 'проект';
let team = `команда`;
let howMuch = 'Сколько';
let sentence = 'нужно программистов чтобы сделать проект ?';

let task1 = `${howMuch} ${sentence} ${numbers.slice(-1)}, ${numbers[0]}, ${team}`;
console.log(task1)

/*
 2. Составьте предложение из представленного массива
 и выведите предложение в консоль;
 "Так, когда Будда достиг Просветления, он обнаружил, что больше не ощущает себя мишенью.
  Он не был больше ни телом, к которому рано или поздно ..."
  // index +++
 */

let array = [
  'Он',
  'был больше ни телом, к которому рано или поздно',
  'он обнаружил',
  'не',
  'Так, когда Будда достиг Просветления',
  '...',
  'что больше',
  'ощущает себя мишенью',
  'не'
];

let homeSentence = `"${array[4]}, ${array[2]} ${array[6]} ${array[8]} ${array[7]}. 
${array[0]} ${array[3]} ${array[1]}, ${array[5]}"`;
console.log(homeSentence)


/*
 3. Добавьте свойста 4 новых свойства в объект используя
    квадратные скобки и точку.
 */

let myObj = {};

myObj.name = 'Meer';
myObj.skills = ['HTML5', 'CSS3', 'JS'];
myObj.friends = {
    friend: {
        name: 'Oleg'
    },
    friend2: {
        name: 'Nastya'
    },
    friend3: {
        name: 'Olya'
    }
}
myObj.mood = ['Happy', 'Sad']


console.log(myObj)

/*
 5. Преобразуйте строку x,
    в максимально удобно читаемый для программиста вид
 */

let frameworks = [4.7, 'Angular', '6Angular', 'React/Redux'];
let x = `google released new version ${frameworks[1]} ${String(frameworks[0]).slice(0, -2)} But real speed is ${frameworks.slice(-1)}`
console.log(x)  

// LINKS
// https://dorey.github.io/JavaScript-Equality-Table/
