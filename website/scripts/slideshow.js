
//counter for when all images are loaded
var loaded = 0, numOfImages = 5, counter = 0;

//creates image elements
var image0 = document.createElement('img');
var image1 = document.createElement('img');
var image2 = document.createElement('img');
var image3 = document.createElement('img');
var image4 = document.createElement('img');


//starts loading images when page is loaded
window.onload = function(e) {
	image0.src = "img/utleiebiler/suv.jpg";
	image1.src = "img/utleiebiler/stasjonsvogn.jpg";
	image2.src = "img/utleiebiler/okonomi.jpg";
	image3.src = "img/utleiebiler/luksus.jpg";
	image4.src = "img/utleiebiler/liten.jpg";

}

//for when all images is loaded, will happen after document is loaded
image0.onload = image1.onload = image2.onload = image3.onload= image4.onload = function(e) {
		loaded++;
		if (loaded === numOfImages)
			draw();
	}

//show if any error occurs
image0.onerror = image1.onerror =
	image2.onerror = image3.onerror = image4.onerror = function(e) {
		alert(e.toString());
	}


//draws the images in a loop
function draw() {

	var images = new Array(image0, image1, image2, image3, image4);

	var	canvas = document.getElementById('canvas');
	var	ctx = canvas.getContext('2d');

	var func = this;

	//draws the images and iterates the counter.
	this._draw = function() {

		ctx.clearRect(0, 0, canvas.width, canvas.height)
		ctx.drawImage(images[counter++], 0, 0);
		if (counter == numOfImages) counter = 0;

		//makes the function call itself every 3rd second
		setTimeout(func._draw, 3000);
	}
	//starts the loop
	this._draw();
}