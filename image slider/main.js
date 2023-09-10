images = [
    'image-01.jpg',
    'image-02.jpg',
    'image-03.jpg',
    'image-04.jpg',
    'image-05.jpg'
]

let count = 1;
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

let nextImage = ()=>{
    count ++;
    if(count>= (images.length+1)){
        count=1;
    }
    let image = document.querySelector('.images');
    image.style.backgroundImage = `url(${images[count-1]})`
    image.animate([{opacity:"0.2"},{opacity:"1.0"}], {duration:700, fill:"forwards"});
};

let prevImage = ()=>{
    count --;
    if(count<=0){
        count= (images.length);
    }
    let image = document.querySelector('.images');
    image.style.backgroundImage = `url(${images[count-1]})`
};

next.addEventListener('click', nextImage);
prev.addEventListener('click', prevImage);