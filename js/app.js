function initMap() {
  var latitud,longitud, marcador;
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: -9.082632, lng: -84.0431127}//Coordenadas de Peru
  });

  var miUbicacion = function(posicion) {
    latitud = posicion.coords.latitude;
    longitud = posicion.coords.longitude;

    marcador = new google.maps.Marker({
      position: {lat:latitud, lng:longitud},
      animation: google.maps.Animation.DROP,
      map: map
  });
    map.setZoom(17);
    map.setCenter({lat:latitud, lng:longitud});
  }
  var error = function (error) {
    window.alert("Tu navegador no soporta la API de geolocalizacion");
  }

  function buscar(e) {
    e.preventDefault();
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(miUbicacion,error);
    }
  }

// Trazando ruta
  var puntoPartida = document.getElementById("puntoPartida");
  var puntoDestino = document.getElementById("puntoDestino");
  new google.maps.places.Autocomplete(puntoPartida);
  new google.maps.places.Autocomplete(puntoDestino);

  var direccionService = new google.maps.DirectionsService;
  var direccionDisplay = new google.maps.DirectionsRenderer;

  var calcularRuta = function (direccionService, direccionDisplay) {
    var request = {
      origin: puntoPartida.value,
      destination: puntoDestino.value,
      travelMode: 'DRIVING'
    };
    direccionService.route(request, function(result, status) {
      if (status == 'OK') {
        var distancia = result.routes[0].legs[0].distance.value/1000;
        var duracion = result.routes[0].legs[0].duration.text;
        var costo = (distancia*1.75).toFixed(2);

        document.getElementById('calcTarifa').innerHTML="";
        document.getElementById('calcTarifa').innerHTML=`Costo: S/. ${costo} <br> Duración: ${duracion}`;
        direccionDisplay.setDirections(result);
      }
    });
    direccionDisplay.setMap(map);
    marcador.setMap(null);
  }

  window.addEventListener("load",buscar);
  document.getElementById('trazarRuta').addEventListener("click",function(e){
    e.preventDefault();
    calcularRuta(direccionService, direccionDisplay);
  });

}
