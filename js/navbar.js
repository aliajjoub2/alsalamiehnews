 // search-box open close js code
 let navbar = document.querySelector(".navbar");
 let searchBox = document.querySelector(".search-box .bx-search");
 // let searchBoxCancel = document.querySelector(".search-box .bx-x");
 
 /* searchBox.addEventListener("click", ()=>{
   navbar.classList.toggle("showInput");
   if(navbar.classList.contains("showInput")){
     searchBox.classList.replace("bx-search" ,"bx-x");
   }else {
     searchBox.classList.replace("bx-x" ,"bx-search");
   }
 }); */
 
         // sidebar open close js code
         let navLinks = document.querySelector(".nav-links");
         let menuOpenBtn = document.querySelector(".navbar .bx-menu");
         let menuCloseBtn = document.querySelector(".nav-links .bx-x");
         menuOpenBtn.onclick = function() {
         navLinks.style.left = "0";
         }
         menuCloseBtn.onclick = function() {
         navLinks.style.left = "-100%";
         }
 
 
         // sidebar submenu open close js code
         let htmlcssArrow = document.querySelector(".OurServiice");
         htmlcssArrow.onclick = function() {
         navLinks.classList.toggle("show3");
         }
         let moreArrow = document.querySelector(".more-arrow");
         moreArrow.onclick = function() {
         navLinks.classList.toggle("show2");
         }
         let jsArrow = document.querySelector(".euroNavbar");
         jsArrow.onclick = function() {
         navLinks.classList.toggle("show1");
         }
         let langArrow = document.querySelector(".langMobil");
         langArrow.onclick = function() {
         navLinks.classList.toggle("show4");
         }