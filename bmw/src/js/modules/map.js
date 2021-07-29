var mymap = L.map('mapid').setView([51.505, -0.09], 13);
const circle = L.circle([37.8157, -122.5295], {
    color: 'gold',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 200
   }).addTo(mymap);