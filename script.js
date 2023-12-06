/*================ Mobile - Navbar =================*/

const mobileButton = document.getElementById('mobile-button'),
    mobileClose = document.getElementById('mobile-close'),
    mobileContent = document.getElementById('mobile-content')

if(mobileButton){
    mobileButton.addEventListener('click', () =>{
        mobileContent.classList.add('show-mobile')
    })
}

if(mobileClose){
    mobileClose.addEventListener('click', () => {
        mobileContent.classList.remove('show-mobile')
    })
}