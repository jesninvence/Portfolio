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

/*================ marquee =================*/

const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
};


/*================ Send Mail =================*/

function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_dj00ij6";
    const templateID = "template_1vyiw15";
    
    emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Message Sent Successfully!");
    })
    .catch((err) => console.log(err));
}


/*====== SWIPER =======*/

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView : 1,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});