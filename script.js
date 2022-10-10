const menuBtn = document.querySelector("#menu-btn");
const image = document.querySelector(".menu-icon");
const links = document.querySelector(".header .links");
const menuLinks = document.querySelectorAll(".menu-link");
const arrow = document.querySelector(".arrow");

console.log(menuBtn.style.display);
function handleClick(event){
    menuBtn.classList.toggle("active");

    if(image.id === 'menu'){
        image.src = './media/icon.png';
        image.id = "close";
        arrow.style.display = "none";
    }else {
        image.src = './media/Union.png';
        image.id = "menu";
        arrow.style.display = "block";
    }
    
    links.classList.toggle("links_active");
}

menuBtn.addEventListener('click', handleClick);

window.addEventListener("resize", () => {
    if(window.innerWidth < 768) {
        menuLinks.forEach((menuLink) => {
            menuLink.addEventListener('click', handleClick);
        });
    }
});