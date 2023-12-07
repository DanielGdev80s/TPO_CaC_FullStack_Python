const slider = document.querySelector(".slider");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let slideIndex = 0;

function updateSlider() {
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

prevBtn.addEventListener("click", () => {
  if (slideIndex > 0) {
    slideIndex--;
    updateSlider();
  }
});

nextBtn.addEventListener("click", () => {
  if (slideIndex < slider.children.length - 1) {
    slideIndex++;
    updateSlider();
  }
});


function autoPlay() {
  if (slideIndex < slider.children.length - 1) {
    slideIndex++;
  } else {
    slideIndex = 0;
  }
  updateSlider();
}

setInterval(autoPlay, 3000); 

    
    
    
    
    
    