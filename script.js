const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
$(document).ready(function(){
	$('.carousel').owlCarousel({

		margin: 20,

		loop: true,

		autoplay: true,

		autoplayTimeOut: 2000,

		autoplayHoverPause: true,

		responsive: {

			0:{

			items: 1,

			nav: false

			},

			600:{

				items: 2,

				nav: false

			},

			1000:{

				items: 3,

				nav: false

			},

		}

	});
})
