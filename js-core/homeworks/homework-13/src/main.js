
/*
 * Вы должны создать имитацию медленной базы данных.
 * TASK - 1 Сделайте Класс Database с методами
 *
 *  query
 *
 *  При запуске метода query запустите внутренний таймаут, который будет длиться 5 секунд.
 *  При поступлении еще 1 запроса(если вызвать метод еще раз),
 *  таймаут должен стартануть сначала
 *  и ответ должен прийти снова через 5 секунд
 *
 * */

class DataBase {
    constuctor () {}
    start(){
        this.counter = 5;
        this.interval = setInterval(() => {              
            if(this.counter <= 0) {
                clearInterval(this.interval);
                console.log('The web server is down');
                return;
            }            
            console.log(this.counter--); 
        }, 1000);
        
    }

    query() {
        clearInterval(this.interval);
        this.start();
    }
}

let dataBase = new DataBase(0);
dataBase.query();
// // 5
// // 4
// // 3
// // 2
// // 1
// // console.log('The web server is down') https://www.youtube.com/watch?v=W8_Kfjo3VjU

// dataBase.query();
// // 5
// // 4
// dataBase.query();
// // 5
// // 4
// // 3
// // 2
// dataBase.query();
// 5
// 4
// 3
// 2
// 1
// console.log('The web server is down')