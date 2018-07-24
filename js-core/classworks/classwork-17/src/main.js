let next = document.getElementById('next');
let colors = ['yellow','green','purple','red'];

// let counter = 0;
// setInterval(() => {    
//     counter++;
//     next.style.backgroundColor = colors[counter];
//     if(counter === colors.length){
//         counter = 0;
//     }
// },1000)

// next.style.left = '0px'

// setInterval(()=>{
//     // let w = getComputedStyle(next).width;
//     let l = getComputedStyle(next).left;
//     next.style.left = `calc(${l} + 10px)`;
//     next.scrollIntoView();
// },200)

next.onclick = () => {
    next.classList.toggle('active');
}
setInterval(() => {
    next.classList.toggle('active');
},5000)