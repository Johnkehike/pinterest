// index.js

import "./styles.css";
// import { greeting } from "./greeting.js";
import { home } from "./home.js";
import { menu } from "./menu.js";
import { about } from "./about.js";

let btnHome = document.getElementById('home');
let btnMenu = document.getElementById('menu');
let btnAbout = document.getElementById('about');


function renderPage(pageFunction) {
    let homeContent = document.getElementById("content");
    homeContent.innerHTML = ""; 
    pageFunction(); 
}


renderPage(home);

btnHome.addEventListener("click", () => {

    renderPage(home);
    btnMenu.classList.remove('menu-new')
    btnMenu.classList.add('menu');
    btnAbout.classList.remove('about-new')
    btnAbout.classList.add('about');

});

btnMenu.addEventListener("click", () => {
    renderPage(menu);
    btnHome.classList.remove('home-new')
    btnHome.classList.add('home');
    btnAbout.classList.remove('about-new')
    btnAbout.classList.add('about');
});

btnAbout.addEventListener("click", () => {
    renderPage(about);
    btnMenu.classList.remove('menu-new')
    btnMenu.classList.add('menu');
    btnHome.classList.remove('home-new')
    btnHome.classList.add('home');
})
