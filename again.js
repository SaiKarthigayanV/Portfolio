document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");
    const button = document.getElementById("btn");
    const hidden = document.getElementById("hidden-content-certs");
    document.getElementById("imageModal").style.display = "none";


    if (menuBtn && navLinks) {
        menuBtn.onclick = () => {
            navLinks.classList.toggle("active");
        };
    }

    if (button && hidden) {
        button.addEventListener("click", () => {
            hidden.classList.toggle("show");
            button.innerText = hidden.classList.contains("show")
               ? "Fold "
               : "Unfold";
        });
    }

});

const animatedCerts = document.querySelectorAll(".cert-animate");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
               entry.target.classList.remove("show");  //← THIS LINE
            }
        });
    },
    {
        threshold: 0.2
    }
);

animatedCerts.forEach(cert => observer.observe(cert));

function showFullImage(img){
    const modal = document.getElementById("imageModal");
    const fullImage = document.getElementById("fullImage");

    fullImage.src = img.src;
    modal.style.display = "flex";
}

function closeModal(){
    document.getElementById("imageModal").style.display = "none";
}

function sendEmail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value
    }

    emailjs.send("stormtyson7717","template_di6jmjp",parms)
.then(() => {
    alert("Your Email has been sent successfully. Thanks Friend!");
})
.catch(err => {
    console.error(err);
    alert("Failed to send email");
})

}
