const sliderWrapper = document.querySelector('.slider-wrapper');
const sliderItems = document.querySelectorAll('.slider-item');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentIndex = 0;

function updateSliderPosition() {
  const offset = -currentIndex * 100;
  sliderWrapper.style.transform = `translateX(${offset}%)`;
}

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = sliderItems.length - 1;
  }
  updateSliderPosition();
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < sliderItems.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateSliderPosition();
});
