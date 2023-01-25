//Nav bar responsive 
//hamburger su 3 linije, 3 diva za navbar
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function(){
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}

//Slajder Galerija
let rightBtn = document.querySelector('#right-btn');
let leftBtn = document.querySelector('#left-btn');
let pictures = document.querySelectorAll('.slider-images img');

let imgNum = 0;

rightBtn.addEventListener('click', () => {
    displayNone();
    imgNum++;

    if(imgNum === pictures.length) {
        imgNum = 0;
    }

    pictures[imgNum].style.display = 'block';
});

leftBtn.addEventListener('click',() => {
    displayNone();
    imgNum--;

    if(imgNum === -1) {
        imgNum = pictures.length - 1;
    }

    pictures[imgNum].style.display = 'block';
});

const displayNone = () => {
    pictures.forEach((img) => {
        img.style.display = 'none';
    })
}