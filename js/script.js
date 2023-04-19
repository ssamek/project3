function init() {
  //alert('it works');
  var el = document.getElementById('canvas');
  var myLocation = new google.maps.LatLng(-36.8593557,174.3764728);
  var mapOptions = {
    center: myLocation,
	zoom: 12,
	mapTypeId: google.maps.MapTypeId.SATELLITE,
	mapTypeControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_CENTER
    }
  };
  
  google.maps.event.addDomListener(window, 'load', init);