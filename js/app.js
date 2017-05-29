function initMap() {
      var uluru = {lat: -12.1190457, lng: -77.0408834};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: uluru
      });

      var marker = new google.maps.Marker({
        position: uluru,
        map: map
      });
}
