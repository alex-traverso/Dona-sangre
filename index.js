$( '.toggler' ).on( 'click', function () {
	$( 'nav' ).toggle( 400 );
} );

// $('.faq-arrow').on('click', function() {
// 	$( '.faq-item-info' ).toggle(400); 
// 	
// } ); 

$( ".faq-item" ).on( "click", function () {
	$( this ).find( ".faq-item-info" ).fadeToggle( 400 );
	$( this ).find( '.faq-arrow-up' ).toggle();
	$( this ).find( '.faq-arrow-down' ).toggle();
} );

//toggleClass("nombredeclase");