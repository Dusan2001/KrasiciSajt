//Nav bar responsive 
//hamburger su 3 linije, 3 diva za navbar
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function(){
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}

baguetteBox.run('.lightbox');