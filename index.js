/* CARROUSELL */

const swiper = new Swiper('.swiper', {
  // Optional parameters
	direction: 'horizontal',
	loop: true,

  // Navigation arrows
	navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
	},
	pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
});





/* FUNCION TOGGLE NAVBAR */
$( '.toggler' ).on( 'click', function () {
	$( 'nav' ).toggle( 400 );
} );

/* FUNCION TOGGLE FAQ */
$( ".faq-item" ).on( "click", function () {
	$( this ).find( ".faq-item-info" ).fadeToggle( 400 );
	$(this ).find( '.faq-arrow' ).toggleClass('rotate-arrow');
} );
