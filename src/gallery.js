import { itemsGallery } from "./item.js";





// const ImgObj = [];

// const images = [
//     "./assets/1.jpg",
//     "./assets/2.jpg",
//     "./assets/3.jpg",
//     "./assets/4.jpg",
//     "./assets/5.jpg" 
// ]
// let imageIndex = 0;

//     for(let i = 0; i < 30; i++ ){
//         let item = {
//             id: i,
//             title: `image${i}`,
//             url: images[imageIndex]
//         }
//         ImgObj.push(item);
//         imageIndex++
//         if ( imageIndex > images.length -1) imageIndex=0 
//     }

//     console.log(ImgObj);

    


export function displayImages(cols, ImgObj){
    let imgContainer = document.getElementById('container');
    imgContainer.innerHTML=``;    

    let colWrap = {};

    for(let i = 0; i < cols; i++){
        colWrap[`column${i}`] = []
    }

    console.log(colWrap);

    for(let i = 0; i < ImgObj.length; i++){
        const col = i % cols;
        colWrap[`column${col}`].push(ImgObj[i]);
    }
    console.log(colWrap);

    for(let i = 0; i < cols; i++){
        let colImg = colWrap[`column${i}`];
        let colDiv = document.createElement('div');
        colDiv.classList.add('column');

        colImg.forEach(eachItem => {
            let imgDiv = document.createElement('div');
            imgDiv.classList.add('img-cont');
            let image = document.createElement('img');
            image.setAttribute('src', `${eachItem.url}`)
            // image.src = eachItem.image;
            let overlay = document.createElement('div');
            overlay.classList.add('overlay');
            let title = document.createElement('div');
            title.classList.add('save-div')
            // title.textContent = eachItem.title
            let bottom = document.createElement('div');
            bottom.classList.add('icon-div');

            let saveBtn = document.createElement('button');
            saveBtn.classList.add('save-btn');
            saveBtn.textContent = `Save${eachItem.id}`;
            saveBtn.style.backgroundColor = 'white';
            title.appendChild(saveBtn);
            let bottombtn = document.createElement('a');
            bottombtn.classList.add('down-btn');
            bottombtn.textContent = `Visit Site`
            bottom.appendChild(bottombtn);


            
            overlay.append(title);


            imgDiv.append(image, overlay);
            colDiv.appendChild(imgDiv);
        })
        imgContainer.appendChild(colDiv);
    }
    
}

