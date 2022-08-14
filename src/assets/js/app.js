const burger = document.getElementById('burger');
const sidebar = document.getElementById('sibebar');
const link = document.querySelectorAll('nav__item-link');
const smoothLinks = document.querySelectorAll('a[href^="#"]');
const body = document.body;

burger.addEventListener('click', event => {
    if (body.classList.contains('show-sidebar')) {
        closeSidebar();
    } else {
        showSidebar();
    }
});


function showSidebar() {
    body.classList.add('show-sidebar');
}

function closeSidebar() {
    body.classList.remove('show-sidebar');
}
const anchors = document.querySelectorAll('a.nav__item-link')

for (let anchor of anchors) {
  anchor.addEventListener('click', e => {
    if (body.classList.contains('show-sidebar')) {
        closeSidebar();
    }
  })
}

$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:4,
		autoplay:true,
		speed:1000,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:3
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:2
				}
			}
		]
	});
});



