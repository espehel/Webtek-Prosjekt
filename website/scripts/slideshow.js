var whichlink
var whichimage
var slideshowspeed

window.addEventListener("load", function(event){

    slideshowimages("img/utleiebiler/suv.jpg","img/utleiebiler/stasjonsvogn.jpg","img/utleiebiler/liten.jpg","img/utleiebiler/luksus.jpg","img/utleiebiler/okonomi.jpg") 
	
    slideshowlinks("link1","link2","link3","link4","link4")
    
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