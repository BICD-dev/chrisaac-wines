//modal box
//selecting elements
//to be clicked
const spirit = document.querySelector(".amaro1");
const wine = document.querySelector(".amaro2");
//pop up backdrops
const backdrop1 = document.querySelector(".background");
const backdrop2 = document.querySelector(".background2");
//display
const drink1 = document.querySelector(".drink1");
const drink2 = document.querySelector(".drink2");
//event listeners
// spirit.addEventListener("click", ()=>{backdrop1.style.display="block";
// drink1.style.display="block"});
// wine.addEventListener("click", ()=>{backdrop2.style.display="block";
// drink2.style.display="block"} );

// backdrop1.addEventListener("click", ()=>{backdrop1.style.display="none";
// drink1.style.display="none"} );
// backdrop2.addEventListener("click", ()=>{backdrop2.style.display="none"; 
// drink2.style.display="none"} );

//not working|

//intersection observer
const intro = document.querySelector(".grid2");
const about = document.querySelector(".about");
const story = document.querySelector(".story");

const callbackFunction = function(entries){
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            if(entry.target.className == "grid2"){
                entry.target.classList.add("loaded")
            }
            if(entry.target.className == "about"){
                entry.target.classList.add("loaded")
            }
            if(entry.target.className == "story"){
                entry.target.classList.add("loaded")
            }
        }
    })
}
const observer = new IntersectionObserver(callbackFunction,{
threshold:0.05
});

observer.observe(intro)
observer.observe(about)
observer.observe(story)

//review slideshow

//defining variables
const slides = document.querySelectorAll(".mySlides");
let dots = document.querySelectorAll(".dot");

let slideIndex = 1;
//next/previous controls
function plusSlides(n){
showSlides(slideIndex += n)
}
//thumbnail image controls
function currentSlide(n){
showSlides(slideIndex = n)
}

function showSlides(n){
let i;
if (n > slides.length){
slideIndex = 1
}
if(n<1){
slideIndex = slides.length
}
if (n>3){
slideIndex = 1
}
for(i=0;i<slides.length;i++){
slides[i].style.display = "none"
}
for(i=0;i<dots.length;i++){
dots[i].className = dots[i].className.replace("active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].classList.add("active");
}