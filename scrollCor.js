/*
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", this.window.scrollY > 0);
}) */



const header = document.querySelector('header');

        window.addEventListener('scroll', () => {
            if (window.scrollY >= 50) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }
        })
