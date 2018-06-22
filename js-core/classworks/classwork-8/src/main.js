function checkAction(action){
    switch(action.type){
        case 'INITIALIZE':
            return {initialized: true};
        case 'INCREMENT':
            return {salary: '+500$'};
        case 'DECREMENT':
            return {salary: '-500$'};
        default:
            return {};
    }
}


console.log(checkAction({type: 'INITIALIZE'}))
console.log(checkAction({type: 'INCREMENT'}))
console.log(checkAction({type: 'DECREMENT'}))
console.log(checkAction({type: 'aloe'}))




function add(){
    let array = [...arguments]
    return array.reduce(function(acc,val,i,arr){
        return acc + val;
    },0)
}
console.log(add(10,20,10,30,40,20,50))


function addFor(){
    let result = 0;
    for(let i = 0; i < arguments.length; i++){
        let elem = arguments[i];
        result +=  elem;
    }
    return result;
}


console.log(addFor(10,20,10,30,40,20,50))



const user = {
    id: 10,
    country: 'Thailand',
    email: 'example@example.com',
    cars: {
        id: 20, 
        names: ['bmw','VAZ','mercedes','AUDI'],
        vendors: {
            id: 50,
            adresses: ['google','yahoo']
        }
    }
}

function copyObj (obj){
    return {...obj, 
        cars: {
            ...obj.cars,
            names: [...obj.cars.names],
            vendors: {
                ...obj.cars.vendors,
                adresses: [...obj.cars.vendors.adresses]
            }
        }
    }
}
let newUser = copyObj(user);
newUser.city = 'ALOE';
newUser.cars.names.push('aloe');
console.log(user,newUser)