import { createApi } from 'unsplash-js';
// let grid = document.querySelector('.grid');

let myArray



function gettingUnsplash(){
    const unsplash = createApi({
        accessKey: 'iX3sCVsQt69KrzOCz2isAxfmF-0Jw01Iyf_0PdjaP58'
      });

      unsplash.photos.list({ page: 1, perPage: 120 })
        .then((response)=>{
            myArray = response.response.results
            console.log(myArray);
            domStuff(myArray)
            
        })
        .catch(error => console.error(error));


    
    
}

function domStuff(items){
    var grid = document.querySelector('.grid');
    var msnry = new Masonry(grid, {
    itemSelector: '.item-div',
    columnWidth: 160,
    gutter: 7,
    fitWidth: true
});
adjustFormWidth();
window.addEventListener("load", adjustFormWidth);
window.addEventListener("resize", adjustFormWidth);
msnry.on("layoutComplete", adjustFormWidth);

    
    
    if (items) {
        // grid.innerHTML=``
        
        items.forEach((item, index) =>{
            console.log(item.alt_description);
            
            let imageDiv = document.createElement('div');
            imageDiv.classList.add('item-div');
            imageDiv.setAttribute('id', `index`);
            let imgTag = document.createElement('img');
            imgTag.setAttribute('src', `${item.urls.thumb}`);
            imgTag.setAttribute('style', `height: ${item.height}` );
            imgTag.setAttribute('alt', `${item.alt_description}`);
            imageDiv.append(imgTag);
            grid.append(imageDiv)
            
            
        }
        
    )
        // **Reinitialize Masonry After Adding Items**
        setTimeout(() => {
            msnry.reloadItems(); // Reload items in Masonry
            msnry.layout(); // Re-layout the grid
        }, 100);
    
    }
    
}

function adjustFormWidth() {
    const grid = document.querySelector(".grid");
    const form = document.querySelector(".form");
    // const input = document.querySelector(".form input");

    if (grid && form) {
        form.style.width = `${grid.offsetWidth}px`;
    }

    // if (input) {
    //     input.style.width = `${Math.max(200, grid.offsetWidth - 50)}px`; // Min width 200px
    // }
}

export { domStuff, gettingUnsplash};