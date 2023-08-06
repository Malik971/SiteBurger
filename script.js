const searchBTN = document.querySelector('#search-btn');
const searchForm = document.querySelector('.search-form');

searchBTN.onclick = () => {
    searchBTN.classList.toggle("fa-times");
    searchForm.classList.toggle("active");
    menuBTN.classList.remove("fa-times");
    navBar.classList.remove("active");
};

const menuBTN = document.querySelector('#menu-btn');
const navBar = document.querySelector('.navbar');

menuBTN.onclick = () => {
    menuBTN.classList.toggle("fa-times");
    navBar.classList.toggle("active");
    searchBTN.classList.remove("fa-times");
    searchForm.classList.remove("active");
}

window.onscroll = () => {
    menuBTN.classList.remove("fa-times");
    navBar.classList.remove("active");
    searchBTN.classList.remove("fa-times");
    searchForm.classList.remove("active");
}