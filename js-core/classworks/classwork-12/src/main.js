// function Human (name) {
//     this.name = name;    
// }

// function Developer (...args){
//     Human.apply(this, args)
// }


// Developer.prototype = Object.create(Human.prototype);

// Human.prototype.drinkCofee = function () {
//     console.log(`${this.name} выпил кофейку :)`);
// }
// Developer.prototype.createHelloWorld = function () {
//     console.log('Hello world');
// }

// let newHuman = new Developer('Вася');

// newHuman.drinkCofee()
// newHuman.createHelloWorld();


function Validator(){
    
}

function AutorizedUser (name,password,cash) {
    this.name = name;
    let myCash = cash;
    let myPass = password;
    this.showUserChash = function (password){    
                    
        this._isPasswordValid(password,myPass) ?
        console.log(`Your cash is ${myCash}$`) :
        console.error('Wrong password');
    }
    this.addCash = function (arg,password) {

        this._isPasswordValid(password,myPass) ?
        myCash += arg : null;

        this._isPasswordValid(password,myPass) ? 
        console.log(`Succes, your cash is ${myCash}$`) : 
        console.error('Wrong password');
    }        
}

AutorizedUser.prototype._isPasswordValid = function (param,myPass) {
    return param === myPass;
}

let newUser = new AutorizedUser('aloe','qwerty',3000);

newUser.showUserChash('qwerty');
newUser.addCash(5000,'qwerty');