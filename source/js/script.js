var slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider__item");
    var dots = document.getElementsByClassName("slider__control");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" slider__control--active", "");
    }
    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += " slider__control--active";
  }

window.onload = function() {
  var startX;
  var slides = document.querySelectorAll('.slider__item');
  for (var i = 0; i < slides.length; i++) {
    slides[i].addEventListener('touchstart', function (e) {
      startX = e.touches[0].clientX;
      this.addEventListener('touchend', getNext)
    })
  }

  var getNext = function (e) {
    var deltaX = e.changedTouches[0].clientX - startX;
    if (Math.abs(deltaX) > 30) {
      if (deltaX > 0) {
        plusSlides(-1);
      } else {
        plusSlides(1);
      }
    }
  }
}
