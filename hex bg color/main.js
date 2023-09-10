const hexColors = [
    "#FF5733",
    "#E62E00",
    "#4CAF50",
    "#008CBA",
    "#673AB7",
    "#9C27B0",
    "#F44336",
    "#FF9800",
    "#2196F3",
    "#3F51B5",
    "#00BCD4",
    "#009688",
    "#4CAF50",
    "#8BC34A",
    "#CDDC39",
    "#FFC107",
    "#FF5722",
    "#795548",
    "#607D8B"
  ];

const min = 0;
const max = hexColors.length - 1;
let colorButton = document.querySelector('.colorButton');
let hexValue = document.querySelector('#hex');

const changeColor = ()=>{
    let num = (Math.random() * (max-min)) + min;
    num = Math.floor(num);
    document.getElementById('body').style.backgroundColor = hexColors[num];
    hexValue.innerHTML = hexColors[num];
};

colorButton.addEventListener('click', changeColor);
