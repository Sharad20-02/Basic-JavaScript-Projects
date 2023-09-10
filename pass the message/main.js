let button = document.querySelector('#button');
const msg = document.querySelector('#message');

let passMessage = ()=>{
    const input = document.querySelector('#input');
    message = input.value;
    if(message){
        msg.innerHTML = message;
    }else{
        alert("Please Enter A Valid Message");
    }
    input.value = "";
};

button.addEventListener('click', passMessage);