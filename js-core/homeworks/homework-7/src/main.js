'use strict';

function add(x) {
    return function(x){
        return function(x){
            return `Sum = ${x+x}`;
        }
    }
}

function patternModule() {
    let count = 0;
    return {
        method: function(){
            return `Counter = ${count++ + 1}`;
        },
        reset: function(){
            count = 0;
            return 'Counter is reset ;)';
        }
    }
}

let jun = {};
function methodCounter(obj, name, num, fn) {   
    obj[name] = fn;
    obj.count = num + 1 || 0;
    obj.addCounter = function(qty){
        obj.count = qty || 0;
        return `Counter added ${qty} ;)`
    }
};

methodCounter(jun,'logger',2,function(...args){     
    this.count--;
    this.count < 0 ? this.count = 0 : null;
    let result = args.reduce(function(accum,val){
        return accum + val;
    }, 0);   
    return this.count > 0 ? `Sum ${result}` : 'ERROR ! add more methods';
})


