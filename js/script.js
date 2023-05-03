// Initialize and add the map
let map;

async function initMap() {
  // The location of Sydney
  const position = { lat: -33.8519734, lng: 150.9037178 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  // The map, centered at Sydney
  map = new Map(document.getElementById("canvas"), {
    zoom: 8,
    center: position,
    mapId: "MAP_ID",
  });

  // The marker, positioned at Sydney
  const marker = new google.maps.Marker({
    position: position,
	map,
    title: "Sydney",
  });
  const infowindow = new google.maps.InfoWindow({
	  content: "<p><b>Sydney</b></p><p>Capital of New South Wales and one of the largest cities in Australia. Sydney is best know for its harbourfront Sydney Opera House.</p>",
    ariaLabel: "Sydney",
  });
  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
});
// The marker, positioned at Bondi Beach
  const marker2 = new google.maps.Marker({
    position: {lat: -33.8909609, lng: 151.2532638 },
	map,
    title: "Bondi Beach",
  });
  const infowindow2 = new google.maps.InfoWindow({
	  content: "<p><b>Bondi Beach</b></p>",
    ariaLabel: "Beach",
  });
  marker2.addListener("click", () => {
    infowindow2.open({
      anchor: marker2,
      map,
	  
    });
});
// The marker, positioned at Sydney Opera House
  const marker3 = new google.maps.Marker({
    position: {lat: -33.8703754, lng: 151.2349183 },
	map,
    title: "Opera House",
	icon: "images/flag.png",
  });
  const infowindow3 = new google.maps.InfoWindow({
	  content: "<p><b>Sydney Opera House</b></p>",
    ariaLabel: "Sydney Opera House",
  });
  marker3.addListener("click", () => {
    infowindow3.open({
      anchor: marker3,
      map,
	  
    });
});
}
initMap();
