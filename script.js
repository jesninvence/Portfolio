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
