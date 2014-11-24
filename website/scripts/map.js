function initialize() {
    var myLatlng = new google.maps.LatLng(63.430515,10.395053);
    var mapOptions = {
        center: myLatlng,
        zoom: 16
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    // Place a draggable marker on the map
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        draggable:true,
        title:"Drag me!"
    });
}
google.maps.event.addDomListener(window, 'load', initialize);