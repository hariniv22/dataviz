 
 
 // We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 12,
	accessToken: API_KEY
});
 
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 10,
	accessToken: API_KEY
});
 
// Create a base layer that holds both maps.
let baseMaps = {
    "Streets": streets,
    "Satellite Streets": satelliteStreets
  };

 // Create the map object with center, zoom level and default layer.
 let map = L.map('mapid', {
	center: [34.0489, -111.0937],
	zoom: 4,
	layers: [satelliteStreets]
});

// Pass our map layers into our layer control and add the layer control to the map.
L.control.layers(baseMaps).addTo(map);

let torontoHoods = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-online/module_13/torontoNeighborhoods.json";
let myStyle = {
	fillColor: 'yellow	',
	color: "red",
	weight: 1
};
d3.json(torontoHoods).then(function(data) {
	console.log(data);

    L.geoJSON(data,{
		style: myStyle,
		onEachFeature: function(feature, layer) {
			layer.bindPopup("<h2>Zipcode: " + feature.properties.ZCTA5CE10 + "</h2>");
		}
	})
	.addTo(map);
});

let stateZip = "https://raw.githubusercontent.com/OpenDataDE/State-zip-code-GeoJSON/master/ks_kansas_zip_codes_geo.min.json";

d3.json(stateZip).then(function(data) {

    L.geoJSON(data,{
		style: myStyle,
		onEachFeature: function(feature, layer) {
			layer.bindPopup("<h2>Zipcode: " + feature.properties.ZCTA5CE10 + "</h2>");
		}
	})
	.addTo(map);
});

let calZip = "https://raw.githubusercontent.com/OpenDataDE/State-zip-code-GeoJSON/master/ca_california_zip_codes_geo.min.json";

d3.json(calZip).then(function(data) {

    L.geoJSON(data,{
		style: myStyle,
		onEachFeature: function(feature, layer) {
			layer.bindPopup("<h2> Zip: " + feature.properties.ZCTA5CE10 + "</h2>");
		}
	})
	.addTo(map);
});