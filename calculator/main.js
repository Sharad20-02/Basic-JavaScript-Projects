let buttons = document.querySelectorAll('.button');
let screen = document.querySelector('.screen');
let equal = document.querySelector('#equal');
let clear = document.querySelector('#clear');

for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        let num = buttons[i].getAttribute('data-num');
        screen.value += num;
    });
}

equal.addEventListener('click', function(){
    if(screen.value== ""){
        alert("input is empty");
        return;
    }
    let value = eval(screen.value);
    screen.value = value;
});

clear.addEventListener('click', function(){
    screen.value="";
});