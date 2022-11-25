/* CARROUSELL */
import Glide from '@glidejs/glide';
new Glide( '.glide' ).mount();

/* FUNCION TOGGLE NAVBAR */
$( '.toggler' ).on( 'click', function () {
	$( 'nav' ).toggle( 400 );
} );

/* FUNCION TOGGLE FAQ */
$( ".faq-item" ).on( "click", function () {
	$( this ).find( ".faq-item-info" ).fadeToggle( 400 );
	$(this ).find( '.faq-arrow' ).toggleClass('rotate-arrow');
} );
