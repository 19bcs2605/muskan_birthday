var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

var slideIndexs = 0;
showSlidess();

function showSlidess() {
  var j;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (j = 0; j < slides.length; j++) {
    slides[j].style.display = "none";
  }
  slideIndexs++;
  if (slideIndexs > slides.length) {
    slideIndexs = 1;
  }
  for (j = 0; j < dots.length; j++) {
    dots[j].className = dots[j].className.replace(" active", "");
  }
  slides[slideIndexs - 1].style.display = "block";
  dots[slideIndexs - 1].className += " active";
  setTimeout(showSlidess, 2000); // Change image every 2 seconds
}
