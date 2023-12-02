/*================ SEARCH =================*/

const searchButton = document.getElementById('search-button'),
    searchClose = document.getElementById('search-close'),
    searchContent = document.getElementById('search-content')

if(searchButton){
    searchButton.addEventListener('click', () =>{
        searchContent.classList.add('show-search')
    })
}

if(searchClose){
    searchClose.addEventListener('click', () => {
        searchContent.classList.remove('show-search')
    })
}