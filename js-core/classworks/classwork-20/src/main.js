const btnGet = document.getElementById('get');
const btnAdd = document.getElementById('add');
const url = 'http://easycode-js.herokuapp.com/aloe/users'

const req = () =>{
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () =>{
        if(xhr.readyState === 4){
            resultGet.textContent = xhr.responseText 
        }
        
    }
    xhr.open('GET', url, true);
    xhr.send();
}
const add = (name,mail,ph) =>{
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () =>{
        if(xhr.readyState === 4){
            postResult.textContent = 'Добавлен пользователь' + xhr.responseText
        }
        
    }
    const user = {
        fullName: name,
        email: mail,
        phone: ph
    }
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(user));
}

btnGet.addEventListener('click',req);
// btnAdd.addEventListener('click',add);

const [myForm] = document.forms;

let createButton = document.getElementById('create');



// createButton.addEventListener('click',function(){
//     if(
//         !myForm.elements.fullName.value && 
//         !myForm.elements.email.value &&
//         !myForm.elements.phone.value
//     ){
//         alert('Заполните пожалуйта форму')
//     }
//     else if(!myForm.elements.fullName.value){
//         alert('Заполните пожалуйста name')
//     }else if(!myForm.elements.email.value){
//         alert('Заполните пожалуйста email')        
//     }
//     else if(!myForm.elements.phone.value){
//         alert('Заполните пожалуйста phone')        
//     }
// })

myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const {email,fullName,phone} = myForm.elements;
    if(!email.value){
        alert('Заполните пожалуйста email');
    }
    if(!fullName.value){
        alert('Заполните пожалуйста name')
    }
    if(!phone.value){
        alert('Заполните пожалуйста phone')
    }
    else{
        add(fullName.value,email.value,phone.value);
    }
})