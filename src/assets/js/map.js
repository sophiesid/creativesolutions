;(function(){


function initMap() {

	var mapDiv = document.querySelector('.ba-map');
    if (mapDiv === null) return;

	var	address = mapDiv.innerHTML;



	var madrid = {
		lat: 40.416775,
		lng: -3.703790
	};


	var baMap = new google.maps.Map(mapDiv, {
		zoom: 16,
		center: madrid ,
		disableDefaultUI: true,
		styles: [
		{
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#f5f5f5"
			}
			]
		},
		{
			"elementType": "labels.icon",
			"stylers": [
			{
				"visibility": "off"
			}
			]
		},
		{
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"color": "#616161"
			}
			]
		},
		{
			"elementType": "labels.text.stroke",
			"stylers": [
			{
				"color": "#f5f5f5"
			}
			]
		},
		{
			"featureType": "administrative.land_parcel",
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"color": "#bdbdbd"
			}
			]
		},
		{
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#eeeeee"
			}
			]
		},
		{
			"featureType": "poi",
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"color": "#757575"
			}
			]
		},
		{
			"featureType": "poi.park",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#e5e5e5"
			}
			]
		},
		{
			"featureType": "poi.park",
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"color": "#9e9e9e"
			}
			]
		},
		{
			"featureType": "road",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#ffffff"
			}
			]
		},
		{
			"featureType": "road.arterial",
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"color": "#757575"
			}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#dadada"
			}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"color": "#616161"
			}
			]
		},
		{
			"featureType": "road.local",
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"color": "#9e9e9e"
			}
			]
		},
		{
			"featureType": "transit.line",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#e5e5e5"
			}
			]
		},
		{
			"featureType": "transit.station",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#eeeeee"
			}
			]
		},
		{
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#c9c9c9"
			}
			]
		},
		{
			"featureType": "water",
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"color": "#9e9e9e"
			}
			]
		}
		]
	});



	// var marker2 = new google.maps.Marker({
	// 	position: madrid,
	// 	map: baMap,
	// 	animation: google.maps.Animation.DROP,
	// 	// icon: '../img/marker.png'
	// });


}

window.onload = initMap;

})();
