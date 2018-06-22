'use strict';

function add(x) {
    return function(y){
        return function(z){
            return `Sum = ${x+y+z}`;
        }
    }
}

console.log(add(10)(20)(50))

function patternModule() {
    let count = 1;
    return {
        method: function(){
            return `Counter = ${count++}`;
        },
        reset: function(){
            count = 1;
            return 'Counter is reset ;)';
        }
    }
}

let check = patternModule();
console.log(check.method())
console.log(check.method())
console.log(check.method())
console.log(check.reset())
console.log(check.method())


let jun = {};
function methodCounter(obj, name, num, fn) {

    let state = {
        count: num
    }

    obj.addCounter = function(qty){
        state.count = qty;
        return `Add to count ${qty}`
    }

    obj[name] = function(...args) {
        if(state.count === 0){
            return 'ERROR ! add more methods';
        }
        state.count--
        return fn(...args);
    };

};

methodCounter(jun, 'logger', 2, function(...args) {     
    return args.reduce(function(accum,val) {
        return accum + val;
    }, 0);   
})


console.log(jun.logger(1,2,3,4))
console.log(jun.logger(1,2,3,4))
console.log(jun.logger(1,2,3,4))
console.log(jun.addCounter(10))
console.log(jun.logger(1,2,3,4))


