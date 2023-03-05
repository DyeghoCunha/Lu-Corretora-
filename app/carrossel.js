
var carouselSlide = document.querySelector(".carousel-slide");
var carouselImages = document.querySelectorAll(".carousel-slide img");

var currentIndex = 0;
var interval;


function startSlideShow() {
	interval = setInterval(nextImage, 3000);
}

function nextImage() {
	currentIndex++;
	if (currentIndex > carouselImages.length - 1) {
		currentIndex = 0;
		
	}
	carouselSlide.style.transform = "translateX(-" + currentIndex * 25 + "%) ";
}

function prevImage() {
	currentIndex--;
	if (currentIndex < 0) {
		currentIndex = carouselImages.length - 1;
	}
	carouselSlide.style.transform = "translateX(-" + currentIndex * 25 + "%) ";
	
}





startSlideShow();