/* Устанавливаем индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд*/
function nextSlide() {
  showSlides((slideIndex += 1));
}

/* Уменьшает индекс на 1 — показываем предыдущий слайд*/
function previousSlide() {
  showSlides((slideIndex -= 1));
}

/* Устанавливаем текущий слайд */
function currentSlide(n) {
  showSlides((slideIndex = n));
}

/* Функция перелистывания */
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("card");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  /* Проходим по каждому слайду в цикле for */
  for (let slide of slides) {
    slide.style.display = "none";
  }
  slides[slideIndex - 1].style.display = "flex";
}

let slideFoto = 1;
showPics(slideFoto);

function nextFoto() {
  showPics((slideFoto += 1));
}

function previousFoto() {
  showPics((slideFoto -= 1));
}

function currentSlide(n) {
  showPics((slideFoto = n));
}

function showPics(n) {
  let i;
  let slides = document.getElementsByClassName("img-gal");

  if (n > slides.length) {
    slideFoto = 1;
  }
  if (n < 1) {
    slideFoto = slides.length;
  }

  /* Проходим по каждому слайду в цикле for */
  for (let slide of slides) {
    slide.style.display = "none";
  }
  slides[slideFoto - 1].style.display = "flex";
}
