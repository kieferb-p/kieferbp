//TODO: create function to change colours faster.

const ham = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")
const root = document.querySelector(":root");
const themeOne =document.getElementById("theme-one")
const themeTwo =document.getElementById("theme-two")
const themeThree =document.getElementById("theme-three")
const themeFour =document.getElementById("theme-four")
const footerNav = document.querySelector('#footer-nav-bar') 
const subFooter = document.querySelector('.sub-footer')
const sections = document.querySelectorAll('section')

themeOne.addEventListener("click", function(){
  //text,logo-background,accent,accent-dark,secondary,secondary-dark,main,hamburger
  root.style.setProperty('--logo-background','#f2f2f2');
  root.style.setProperty('--hamburger','#1d1d1d')
  root.style.setProperty('--text','#1D1D1D');
  root.style.setProperty('--main','#F2F2F2');
  root.style.setProperty('--secondary','#F23A29')
  root.style.setProperty('--secondary-dark','#A01705')
  root.style.setProperty('--secondary-light','#d03A29')
  root.style.setProperty('--accent','#E4F0F4')


});

themeTwo.addEventListener("click", function(){
  root.style.setProperty('--logo-background','#FDF5EA');
  root.style.setProperty('--hamburger','#140605')
  root.style.setProperty('--text','#1D1D1D');
  root.style.setProperty('--main','#C7935A');
  root.style.setProperty('--secondary','#F23A29')
  root.style.setProperty('--secondary-dark','#881515')
  root.style.setProperty('--accent','#EEEEEE')
  footerNav.style.setProperty('color','black')
  subFooter.style.setProperty('color','white')
})

themeThree.addEventListener("click", function(){
  root.style.setProperty('--logo-background','#F2F2F2');
  root.style.setProperty('--hamburger','green')
  root.style.setProperty('--text','#fff');
  root.style.setProperty('--main','#000000');
  root.style.setProperty('--secondary','green')
  root.style.setProperty('--secondary-dark','dark green')
  root.style.setProperty('--accent','#E4F0F4')
});

themeFour.addEventListener("click", function(){
  root.style.setProperty('--logo-background','#F2F2F2');
  root.style.setProperty('--hamburger','#1d1d1d')
  root.style.setProperty('--text','black');
  root.style.setProperty('--main','#BadA55');
  root.style.setProperty('--secondary','salmon')
  root.style.setProperty('--secondary-dark','magenta')
  root.style.setProperty('--accent','skyblue')
})


ham.addEventListener("click", () => {
  ham.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    ham.classList.remove("active");
    navMenu.classList.remove("active");
  })
});

