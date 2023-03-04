

document.addEventListener("DOMContentLoaded", function () {
  // Selecionando todos os carrosséis
  const carousels = document.querySelectorAll(".carousel-card");

  // Para cada carrossel
  carousels.forEach((carousel) => {
    // Selecionando os elementos do carrossel
    const carouselSlide = carousel.querySelector(".carousel-card-slide");
    const carouselImages = carousel.querySelectorAll(".carousel-card-slide img");

    // Botões de navegação
    const prevBtn = carousel.querySelector("#prevBtn");
    const nextBtn = carousel.querySelector("#nextBtn");

    // Contador de imagem e tamanho da imagem
    let counter = 1;
    const size = carouselImages[0].clientWidth;

    // Ajustando a posição inicial do carrossel
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

    // Evento de clique para o botão de próxima imagem
    nextBtn.addEventListener("click", () => {
      if (counter >= carouselImages.length - 1) return;
      carouselSlide.style.transition = "transform 0.4s ease-in-out";
      counter++;
      carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
    });

    // Evento de clique para o botão de imagem anterior
    prevBtn.addEventListener("click", () => {
      if (counter <= 0) return;
      carouselSlide.style.transition = "transform 0.4s ease-in-out";
      counter--;
      carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
    });

    // Evento para quando a transição terminar, ajustar a posição do carrossel
    carouselSlide.addEventListener("transitionend", () => {
      if (carouselImages[counter].id === "lastClone") {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform =
          "translateX(" + -size * counter + "px)";
      }
      if (carouselImages[counter].id === "firstClone") {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform =
          "translateX(" + -size * counter + "px)";
      }
    });
  });
});
