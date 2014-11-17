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
		
		var slideimages=new Array()
		var slidelinks=new Array()
		function slideshowimages(){
		
		for (i=0;i<slideshowimages.arguments.length;i++){
			slideimages[i]=new Image()
			slideimages[i].src=slideshowimages.arguments[i]
			}
		}

		function slideshowlinks(){
		for (i=0;i<slideshowlinks.arguments.length;i++)
		slidelinks[i]=slideshowlinks.arguments[i]
		}

		function gotoshow(){
		if (!window.winslide||winslide.closed)
		winslide=window.open(slidelinks[whichlink])
		else
		winslide.location=slidelinks[whichlink]
		winslide.focus()
		}