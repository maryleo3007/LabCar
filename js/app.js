function initMap() {
    var uluru = {lat: -12.1190457, lng: -77.0408834};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 5,
      center: uluru
    });

  	var latitud,longitud;

    var encontrar = function(posicion) {
  		latitud = posicion.coords.latitude;
  		longitud = posicion.coords.longitude;

  		var ubicacion = new google.maps.Marker({
  			position: {lat:latitud, lng:longitud},
  			animation: google.maps.Animation.DROP,
  			map: map
  		});
    		map.setZoom(17);
    		map.setCenter({lat:latitud, lng:longitud});
    	}
    	var error = function (error) {
    		window.alert(" failed it means you probably did not give permission for the browser");
    	}
      function buscar() {
        if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition(encontrar,error);
        }
      }

    var puntoPartida = document.getElementById("puntoPartida");
    var puntoDestino = document.getElementById("puntoDestino");
    new google.maps.places.Autocomplete(puntoPartida);
    new google.maps.places.Autocomplete(puntoDestino);

    var direccionService = new google.maps.DirectionsService;
    // console.log(direccionService);
    var direcctionDisplay =new google.maps.DirectionsRenderer;
    // console.log(direcctionDisplay);

    // var trazrruta = function (direccionService, direcctionDisplay) {
    //   direccionService.route();
    // }
    window.addEventListener("load",buscar);

}
