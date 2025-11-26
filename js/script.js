// buat animasi typing
let typed = new Typed(".typing", {
    strings:["Front-End Dev","Web Developer", "Mobile App Dev", "Web Designer"],
    typeSpeed:60,
    backSpeed:50,
    loop:true
})


//buat nagivasi aside

const aside = document.querySelector(".aside-content");
const toggler = document.querySelector(".nav-toggler");

toggler.addEventListener("click", () => {
    aside.classList.toggle("open");
    aside.classList.toggle("close");
});

const navItems = document.querySelectorAll(".nav li a");

navItems.forEach((item) => {
    item.addEventListener("click", function () {

        navItems.forEach((nav) => nav.classList.remove("active"));

        this.classList.add("active");

        if (window.innerWidth <= 991) {
            aside.classList.remove("open");
            aside.classList.add("close");
        }
    });
});

//buat buka gmaill

document.getElementById("sendMail").addEventListener("click", () => {
    window.open("https://mail.google.com/mail/?view=cm&fs=1&to=hanifwalian@gmail.com", "_blank");
});