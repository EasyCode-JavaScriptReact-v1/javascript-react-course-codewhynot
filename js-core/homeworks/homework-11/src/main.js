/*
 *
 * Сделайте 4 объекта - не усложняйте, просто наследование
 * через __proto__

 - Пользователь
 - Верифицированный пользователь(админ)
 - Гость
 - База данных

 - База хранит информацию о пользователях
 - Пользователи знают мыло админа
 - админ знает пароль от базы данных
 - Гости могут зарегистрироваться в базе данных

 *
 * */


let user = {
    name: 'Grisha',
    mail: 'grisha@gmail.com',
    password: 'qwerty'
}
let admin = {
    email: 'oleglustenko@gmail.com'
}
let guests = {

}
let dataBase = {
    host: 'localhost',
    password: 'Q1W1E1R1'
}



dataBase.__proto__ = user;
user.__proto__ = admin;


console.log(user,dataBase,admin)


