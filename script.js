// const header= document.querySelector("header");
// window.addEventListener("scroll",function(){
//     header.classList.toggle("sticky", window.scrollY>80)
// });
// let menu=document.querySelector('#menu-icon');
// let navbar= document.querySelector('.navbar');
// menu.onclick=()=>{
//     menu.classList.toggle('bx-x');
//     navbar.classList.toggle('open')
// };
// window.onscroll=()=>{
//     menu.classList.remove('bx-x');
//     navbar.classList.remove('open')
// }
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const menu = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    // Sticky header on scroll
    window.addEventListener("scroll", function () {
        header.classList.toggle("sticky", window.scrollY > 80);
    });

    // Toggle mobile menu
    menu.addEventListener('click', () => {
        menu.classList.toggle('bx-x');
        navbar.style.right="0";
    });
    
   
   

    // Close mobile menu on scroll
    window.addEventListener('scroll', () => {
        menu.classList.remove('bx-x');
        navbar.style.right="-100%";
    });
   
});

      function navigateToPage() {
          // give URL to the desired webpage
          window.location.href = '/contact.html';
      }
