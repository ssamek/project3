/*let map;
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
  }
  };
  
 /* var myMap = new google.maps.Map(el, mapOptions);
  
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(52.354454,4.7535836),
    map: myMap,
    animation: google.maps.Animation.BOUNCE,
	icon: 'images/flag.png'
  });
  
 var contentString = '<h1>Muiderslot</h1><p>Muiden Castle is currently a national museum. The inside of the castle, its rooms and kitchens, was restored to look like they did in the 17th century and several of the rooms now house a collection of arms and armour.</p>';
  
  var infowindow = new google.maps.InfoWindow({
    content: contentString,
	maxWidth: 250,
  });
google.maps.event.addListener(marker, 'mouseover', function() {
    infowindow.open(myMap, marker);
  });
  */
//google.maps.event.addDomListener(window, 'load', init);
//init();

// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: -33.8469759, lng: 150.3715249 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("canvas"), {
    zoom: 4,
    center: position,
    mapId: "MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerView({
    map: map,
    position: position,
    title: "Sydney",
  });
}

initMap();
