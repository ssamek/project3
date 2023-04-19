function init() {
  //alert('it works');
  var el = document.getElementById('canvas');
  var myLocation = new google.maps.LatLng(52.3567415,4.8080992);
  var mapOptions = {
    center: myLocation,
	zoom: 12,
	mapTypeId: google.maps.MapTypeId.SATELLITE,
	mapTypeControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_CENTER
    }
  };
  
  google.maps.event.addDomListener(window, 'load', init);