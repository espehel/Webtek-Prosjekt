var whichlink
var whichimage
var slideshowspeed

window.addEventListener("load", function(event){

	slideshowimages("img/utleiebiler/suv.jpg","img/utleiebiler/stasjonsvogn.jpg","img/utleiebiler/liten.jpg","img/utleiebiler/luksus.jpg","img/utleiebiler/okonomi.jpg")

	slideshowlinks("cars/suv.html","cars/stasjonsvogn.html","cars/liten.html","cars/luksus.html","cars/okonomi.html")

	slideshowspeed=2000

	whichlink=0
	whichimage=0


	slideit()
});

function slideit(){
	if (!document.images)
		return
	document.images.slide.src=slideimages[whichimage].src
	whichlink=whichimage
	if (whichimage<slideimages.length-1)
		whichimage++
	else
		whichimage=0
	setTimeout("slideit()",slideshowspeed)
}


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