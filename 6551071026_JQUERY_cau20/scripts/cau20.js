let slider = document.querySelector('.slider');
let images = document.querySelectorAll('.slider img');
let index = 0;
let visible = 5;
let total = images.length;

function showSlide() {
  slider.style.transform = `translateX(${-index * 20}%)`;
}

document.getElementById('next').onclick = () => {
  index++;
  if (index > total - visible) index = 0;
  showSlide();
};

document.getElementById('prev').onclick = () => {
  index--;
  if (index < 0) index = total - visible;
  showSlide();
};

setInterval(() => {
  index++;
  if (index > total - visible) index = 0;
  showSlide();
}, 3000);
