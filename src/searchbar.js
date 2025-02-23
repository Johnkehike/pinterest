let searchFocus = document.getElementById('search-focus');
let searchClose = document.getElementById('search-close');
let inputSearch = document.getElementById('search-input');
let suggest = document.getElementById('suggest');



function searchDetails(){

    inputSearch.addEventListener('focus', (e) => {
        searchFocus.style.display = 'none';
        searchClose.classList.remove('fa-circle-xmark');
        searchClose.classList.add('fa-circle-xmark-now');
        suggest.classList.remove('suggest');
        suggest.classList.add('suggest-now');

    });

    inputSearch.addEventListener('blur', (e) => {
        searchFocus.style.display = '';
        searchClose.classList.remove('fa-circle-xmark-now');
        searchClose.classList.add('fa-circle-xmark');
        suggest.classList.remove('suggest-now');
        suggest.classList.add('suggest');
    });

}

export { searchDetails }