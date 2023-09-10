const add = document.querySelector('#add');
const minus = document.querySelector('#minus');
const save = document.querySelector('#save');
let count = 0;

let update = ()=>{
    let num = document.querySelector('#num');
    if(num.innerHTML == 0){
        num.style.color = "white";
    }else if(num.innerHTML>0){
        num.style.color = "yellow";
    }else{
        num.style.color = "red";   
    }
};

let addCount = ()=>{
    count++;
    let num = document.querySelector('#num');
    num.innerHTML = count;
    num.animate([{opacity:'0.2'},{opacity:'1.0'}], {duration:500, fill:'forwards'});
    update();
};

let minusCount = ()=>{
    count--;
    let num = document.querySelector('#num');
    num.innerHTML = count;
    num.animate([{opacity:'0.2'},{opacity:'1.0'}], {duration:500, fill:'forwards'});
    update();
};

let saveCount = ()=>{
    let saveNum = document.querySelector('#saveNum');
    saveNum.innerHTML = count;
};

add.addEventListener('click', addCount);
minus.addEventListener('click', minusCount);
save.addEventListener('click', saveCount);