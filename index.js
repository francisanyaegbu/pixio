function displayContent() {
    const content = document.querySelector(".dropdown_content") 
    
    if(content.classList.contains("hide")){
        content.classList.remove("hide")
    }else {
        content.classList.add("hide")
    }
}

function refreshPage() {
        window.location.reload();
}

window.onscroll = function() { scrollFunction(); };

function scrollFunction() {
    const header = document.querySelector(".header");
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        header.classList.add("header-visible");
        header.style.backgroundColor = "#fff";
        header.style.boxShadow = "0 2px 4px rgba(107, 107, 107, 0.1)";
    } else {
        header.classList.remove("header-visible");
        header.style.backgroundColor = "transparent";
        header.style.boxShadow = "none";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".header").classList.remove("header-visible");
});

document.querySelector(".header").addEventListener("scroll", function(){
        const header = document.querySelector(".header");
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        header.classList.add("header-visible");
        header.style.backgroundColor = "#fff";
        header.style.boxShadow = "0 2px 4px rgba(107, 107, 107, 0.1)";
    } else {
        header.classList.remove("header-visible");
        header.style.backgroundColor = "transparent";
        header.style.boxShadow = "none";
    }
})

let cursor = document.querySelector('.cursor');
let cursorTwo = document.querySelector('.cursor-two');
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    updateCursor();
});

window.addEventListener('scroll', updateCursor);

function updateCursor() {
    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;
    cursor.style.top = (mouseY + scrollY - 5) + "px";
    cursor.style.left = (mouseX + scrollX - 5) + "px";
    cursorTwo.style.top = (mouseY + scrollY - 16) + "px";
    cursorTwo.style.left = (mouseX + scrollX - 16) + "px";
}
