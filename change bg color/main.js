const backgroundColors = [
    "white",
    "black",
    "gray",
    "red",
    "green",
    "blue",
    "yellow",
    "orange",
    "purple",
    "pink",
    "brown",
    "lightgray",
    "darkgray",
    "lightblue",
    "lightgreen",
    "lightpink",
    "lightyellow",
    "lightcyan",
    "lightcoral"
  ];
  
const min = 0;
const max = backgroundColors.length-1;

function color(){
    let num = (Math.random() * (max-min)) + min;
    num = Math.floor(num);
    document.getElementById('body').style.backgroundColor = backgroundColors[num];
};