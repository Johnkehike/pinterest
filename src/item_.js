import { displayImages } from "./gallery";

export function itemsGallery(){

    const ImgObj = [];

const images = [
    "./assets/1.jpg",
    "./assets/2.jpg",
    "./assets/3.jpg",
    "./assets/4.jpg",
    "./assets/5.jpg" 
]
let imageIndex = 0;

    for(let i = 0; i < 30; i++ ){
        let item = {
            id: i,
            title: `image${i}`,
            url: images[imageIndex]
        }
        ImgObj.push(item);
        imageIndex++
        if ( imageIndex > images.length -1) imageIndex=0 
    }

    return ImgObj;
    console.log(ImgObj);
}