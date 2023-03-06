
let menuAberto = false;

function toggleMenu() {

	const menu = document.getElementById('navLinks');
	const iconeAbre = document.querySelector('.hamburger-abre')
	const iconeFecha = document.querySelector('.hamburger-fecha')
	if (menuAberto) {
	  menu.classList.remove('aberto');

	  iconeAbre.style.display = "block";
	  iconeFecha.style.display = "none";
	  
	  menuAberto = false;
	  
	  
	} else {
	  menu.classList.add('aberto');

	  iconeAbre.style.display = "none";
	  iconeFecha.style.display = "block";
	
	  menuAberto = true;
	  
	  
	}
	console.log("click")
	 
  }

  const menuHamburger = document.querySelector('#hamburger');
menuHamburger.addEventListener('click', toggleMenu);
