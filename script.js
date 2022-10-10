const menuBtn = document.querySelector("#menu-btn");
const image = document.querySelector(".menu-icon");
const links = document.querySelector(".header .links");

function handleClick(event){
    menuBtn.classList.toggle("active");
    if(image.id === 'menu'){
        image.src = './media/icon.png';
        image.id = "close";
    }else {
        image.src = './media/Union.png';
        image.id = "menu";
    }
    
    links.classList.toggle("links_active");
}

menuBtn.addEventListener('click', handleClick);