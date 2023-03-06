
var carouselSlide = document.querySelector(".carousel-slide");
var carouselImages = document.querySelectorAll(".carousel-slide img");

var currentIndex = 0;
var interval;

const largura = window.innerWidth;
const qtdImagens = carouselImages.length;
const porcentagemImagem = 100/qtdImagens;

console.log(porcentagemImagem)


function startSlideShow() {
	interval = setInterval(nextImage, 3000);
}

function nextImage() {
	currentIndex++;
	if (currentIndex > carouselImages.length -1 ) {
		
		currentIndex = 0;
	}
	//console.log(currentIndex)
	carouselSlide.style.transform = "translateX(-" + currentIndex * porcentagemImagem + "%) ";
}


startSlideShow();