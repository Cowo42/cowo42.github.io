// Google maps
// https://www.google.it/maps/ms?msid=206283331856136279699.0004de6676ae869eb2122&msa=0&ll=43.498116,13.531935&spn=0.001584,0.003484
$(function() {
	var settingsItemsMap = {
		zoom: 16,
		center: new google.maps.LatLng(43.49898, 13.54414),
		panControl: false,
		zoomControl: false,
		mapTypeControl: false,
		scaleControl: false,
		streetViewControl: false,
		overviewMapControl: false,
		scrollwheel: false,
		mapTypeId: google.maps.MapTypeId.HYBRID
	};
	var map = new google.maps.Map(document.getElementById('map_canvas'), settingsItemsMap );

	var myMarker = new google.maps.Marker({
		position: new google.maps.LatLng(43.49898, 13.54414),
		draggable: false
	});

	map.setCenter(myMarker.position);
	myMarker.setMap(map);
});

// Smooth scroll to defined place on site

$(function() {
	$('ul.nav a, .row a').bind('click',function(event){
	var $anchor = $(this);
	$('[data-spy="scroll"]').each(function () {
	var $spy = $(this).scrollspy('refresh')
	});
	$('html, body').stop().animate({
	scrollTop: $($anchor.attr('href')).offset().top
	}, 600);
	event.preventDefault();
	});
});

// Background stretch to fit screen size

$(function() {
$.backstretch("img/bg.jpg");
});