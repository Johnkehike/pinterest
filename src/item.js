import img1 from "./assets/1.jpg";
import img2 from "./assets/2.jpg";
import img3 from "./assets/3.jpg";
import img4 from "./assets/4.jpg";
import img5 from "./assets/5.jpg";

export function itemsGallery() {
    const ImgObj = [];

    const images = [img1, img2, img3, img4, img5]; // Use imported image paths
    let imageIndex = 0;

    for (let i = 0; i < 80; i++) {
        let item = {
            id: i,
            title: `image${i}`,
            url: images[imageIndex], // Use imported URLs
        };
        ImgObj.push(item);
        imageIndex++;
        if (imageIndex > images.length - 1) imageIndex = 0;
    }

    return ImgObj
    console.log(ImgObj);
}
