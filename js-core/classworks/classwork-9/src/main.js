const json = {
    "aloe": "vera",
    "version": 15,
    "dependency": {
        "react": "16.4.0",
        "babel": false
    },
    "something": ["aloe","vera"],
    "null": null
}

json.visible = function(){
    return Object.keys(this);
}

// console.log(json.visible())
// let aloe = JSON.stringify(json);

// console.log(JSON.parse(aloe))


const fES6 = (name) => `Привет меня зовут ${name}`


console.log(fES6('Олег'))

const getSome = (name) => ({name})

console.log(getSome('aloe'))

const someArr = ['aloe','vera','Kostya','Aleh'];

const makeArr = args => 
args.map( 
    name => ({
        name
    }))

console.log(makeArr(someArr))



const another = {
    name: 'easey-code',
    id: 0,
    salary: '+500$'
}




const book1 = {
    name: 'Book1',
    pages: 150,
    showPages
}
const book2 = {
    name: 'Book2',
    pages: 250,
    showPages
}

function showPages (){
    return this.pages;
}
showPages();


console.log(book2.showPages())
console.log(book1.showPages())