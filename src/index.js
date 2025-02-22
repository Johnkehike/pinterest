// index.js

import "./styles.css";
// import { greeting } from "./greeting.js";
import { home } from "./home.js";
import { menu } from "./menu.js";
import { about } from "./about.js";
import Masonry from "masonry-layout";
import { gettingUnsplash, domStuff } from "./images.js";
import { sidebarClickEvents } from "./clicking.js";
import { searchDetails } from "./searchbar.js";
import { displayImages } from "./gallery.js"
import { itemsGallery } from "./item.js";

let btnHome = document.getElementById('home');
let btnMenu = document.getElementById('menu');
let btnAbout = document.getElementById('about');



// $('.grid').Masonry({
//     itemSelector: '.grid-item',
//     columnWidth: 160
//   });

// function renderPage(pageFunction) {
//     let homeContent = document.getElementById("content");
//     homeContent.innerHTML = ""; 
//     pageFunction(); 
// }


// renderPage(home);

// btnHome.addEventListener("click", () => {

//     renderPage(home);
//     btnMenu.classList.remove('menu-new')
//     btnMenu.classList.add('menu');
//     btnAbout.classList.remove('about-new')
//     btnAbout.classList.add('about');

// });

// btnMenu.addEventListener("click", () => {
//     renderPage(menu);
//     btnHome.classList.remove('home-new')
//     btnHome.classList.add('home');
//     btnAbout.classList.remove('about-new')
//     btnAbout.classList.add('about');
// });

// btnAbout.addEventListener("click", () => {
//     renderPage(about);
//     btnMenu.classList.remove('menu-new')
//     btnMenu.classList.add('menu');
//     btnHome.classList.remove('home-new')
//     btnHome.classList.add('home');
// })

// gettingUnsplash();
// domStuff()

const ImgObj = itemsGallery();
sidebarClickEvents()
searchDetails()


let oldScreenSize = window.innerWidth;

function setInitialColumns() {
    let columns;
    if (window.innerWidth < 430) {
        columns = 1;
    } else if (window.innerWidth >= 430 && window.innerWidth < 600) {
        columns = 2;
    } else if (window.innerWidth >= 600 && window.innerWidth < 1000) {
        columns = 4;
    } else if (window.innerWidth >= 1000 && window.innerWidth < 1400) {
        columns = 7;
    } else {
        columns = 9;
    }
    console.log(`Initial screen size: ${window.innerWidth}px, Columns: ${columns}`);
    displayImages(columns, ImgObj);
}

// Run on page load
window.addEventListener("load", setInitialColumns);

// Run on resize
window.addEventListener("resize", () => {
    let columns;
    
    if (window.innerWidth < 430 && oldScreenSize >= 430) {
        columns = 1;
    } else if (window.innerWidth >= 430 && window.innerWidth < 600 && (oldScreenSize < 430 || oldScreenSize >= 600)) {
        columns = 2;
    } else if (window.innerWidth >= 600 && window.innerWidth < 1000 && (oldScreenSize < 600 || oldScreenSize >= 1000)) {
        columns = 4;
    } else if (window.innerWidth >= 1000 && window.innerWidth < 1400 && (oldScreenSize < 1000 || oldScreenSize >= 1400)) {
        columns = 7;
    } else if (window.innerWidth >= 1400 && oldScreenSize < 1400) {
        columns = 9;
    }

    if (columns !== undefined) {
        console.log(`Resized screen: ${window.innerWidth}px, Columns: ${columns}`);
        displayImages(columns, ImgObj);
    }

    oldScreenSize = window.innerWidth;
});
