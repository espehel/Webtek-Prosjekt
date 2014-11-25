/*var whichlink
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
}*/

//image counter as there is no guarantee that the last images loaded
//is the last one to finish
var loaded = 0, numOfImages = 4;

//first part of chain, invoke async load
var image0 = document.createElement('img'); //this will work in new Chrome
var image1 = document.createElement('img'); //instead of new Image
var image2 = document.createElement('img');
var image3 = document.createElement('img');
var image4 = document.createElement('img');

//common event handler when images has loaded with counter
//to know that all images has loaded
image0.onload = image1.onload =
	image2.onload = image3.onload= image4.onload = function(e) {
		loaded++;
		if (loaded === numOfImages)
			draw();   // <-- second part of chain, invoke loop
	}

//show if any error occurs
image0.onerror = image1.onerror =
	image2.onerror = image3.onerror = image4.onerror = function(e) {
		alert(e.toString());
	}

//invoke async loading... you can put these four into your
//window.onload if you want to
image0.src = "img/utleiebiler/suv.jpg";
image1.src = "img/utleiebiler/stasjonsvogn.jpg";
image2.src = "img/utleiebiler/okonomi.jpg";
image3.src = "img/utleiebiler/luksus.jpg";
image4.src = "img/utleiebiler/liten.jpg";

// this is the main function
function draw() {

	var images = new Array(image0, image1, image2, image3, image4),
		counter = 0,
		maxNum = images.length - 1,

		myCanvas = document.getElementById('myCanvas'),
		ctx = myCanvas.getContext('2d'),

		me = this; //this we need for setTimeout()

	//third part of chain, have a function to invoke by setTimeout
	this._draw = function() {

		ctx.clearRect(0, 0, myCanvas.width, myCanvas.height)
		ctx.drawImage(images[counter++], 0, 0);
		if (counter > maxNum) counter = 0;

		setTimeout(me._draw, 3000); //here we use me instead of this
	}
	this._draw(); //START the loop
}