

import "./styles.css";
import { sidebarClickEvents } from "./clicking.js";
import { searchDetails } from "./searchbar.js";
import { displayImages } from "./gallery.js"
import { itemsGallery } from "./item.js";

const ImgObj = itemsGallery();
sidebarClickEvents()
searchDetails()


let oldScreenSize = window.innerWidth;

function setInitialColumns() {
    let columns;
    if (window.innerWidth < 430) {
        columns = 2;
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


window.addEventListener("load", setInitialColumns);


window.addEventListener("resize", () => {
    let columns;
    
    if (window.innerWidth < 430 && oldScreenSize >= 430) {
        columns = 2;
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




