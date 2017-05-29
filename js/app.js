function initMap() {
      var uluru = {lat: -12.1190457, lng: -77.0408834};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: uluru
      });



window.addEventListener("load",function () {
  var infoWindow = new google.maps.InfoWindow({map: map});
  if (ContextCompat.checkSelfPermission(this, Manifest.permission.ACCESS_FINE_LOCATION)
            == PackageManager.PERMISSION_GRANTED) {
map.setMyLocationEnabled(true);
} else {
// Show rationale and request permission.
}
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
})

}
