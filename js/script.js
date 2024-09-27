function runTypingEffect(){
  const text = "안녕하세요. 'Smoothly & Adequately' Hyundong입니다.";
  const textArea = document.querySelector("#textArea")
  const typingDelay = 100;
  typeText(text, textArea, typingDelay);
}
function typeText(text, textArea, delay) {

    for(let i = 0; i < text.length ; i++){
      setTimeout(() =>{
        textArea.textContent += text.charAt(i);
      }, delay * i);
      
}}

function userScroll() {
  const navBar = document.querySelector('nav');
  
  window.addEventListener('scroll',() => {
  if (window.scrollY > 50)
  {
  navBar.classList.add('navbar-sticky');
  }
  else{
  navBar.classList.remove('navbar-sticky');
}
  });
}


function incrementStats() {
  const counters = document.querySelectorAll('.counter');
  
  counters.forEach((counter)=>{
    counter.innerText = 0;

    const updateCounter = () => {
      const target = counter.getAttribute('data-target');
      const c = +counter.innerText;
      
      const increment = target/200;

      if(c<target){
        counter.innerText = Math.ceil(c+increment);
        setTimeout(updateCounter, 1);
      }
      else {
        counter.innerText = target;
      }
    }
    updateCounter();
  });
}
const statThreshold = document.querySelector('.sec-stats');

  const checkisVisible = (e) => {
    const rect = e.getBoundingClientRect();
    if(rect.bottom <= window.innerHeight){
      document.addEventListener('DOMContentLoaded', incrementStats);
      console.log("your are scrolled")
    }
  }
  document.addEventListener('scroll', () =>{
    checkisVisible(statThreshold);
  })


function replaceMe() {
const checkReplace = document.querySelector('.replace-me');

if (checkReplace !== null) {
  const replace = new ReplaceMe(checkReplace, {
    animation: 'animated fadeIn',
    speed: 2000,
    separator: ',',
    loopCount: 'infinite',
    autoRun: true,
  })
}
}

document.addEventListener('DOMContentLoaded', runTypingEffect);
document.addEventListener('DOMContentLoaded', replaceMe); 
document.addEventListener('DOMContentLoaded', userScroll); 
 
// video-modal
const videoBtn = document.querySelector('.video-btn');
const videoModal_1= document.querySelector('#videoModal01');
const videoModal_2= document.querySelector('#videoModal02');
const videoModal_3= document.querySelector('#videoModal03');
const video = document.querySelector('#video');
let videoSrc;

if(videoBtn !== null) {
  videoBtn.addEventListener('click', ()=> {
videoSrc = videoBtn.getAttribute('data-bs-src');

  })
}
if(videoModal_1 !== null) {
  videoModal_1.addEventListener('shown.bs.modal', () => {
    video.setAttribute('src', videoSrc + '?autoplay=1;modestbranding=1;showInfo=0');
  });

  videoModal_1.addEventListener('hide.bs.modal',() => {
    video.setAttribute('src', videoSrc)
  })
}


// Swiper 애니메이션 구현
var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 10,
  mousewheel: {
    releaseOnEdges: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

