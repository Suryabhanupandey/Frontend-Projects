// ====== Fetch hamburger and menu elements ======
const hamburger =document.querySelector('.hamburger');
const menu = document.getElementById("menu");
hamburger.addEventListener('click',() =>{
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
});
// ====== Toggle active class on click ======