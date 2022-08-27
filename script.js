const toggle = document.querySelector(".toggle");
const nav = document.querySelector("nav");

toggle.addEventListener('click', () => {
    toggle.classList.toggle("active");
    nav.classList.toggle("active");
})

// const toggle = document.querySelector('.toggle input');
// const nav = document.querySelector('nav ul');

// toggle.addEventListener('click', function() {
//     nav.classList.toggle('slide')
// });

function myfunction (){
    alert("Cooming Soon")
}