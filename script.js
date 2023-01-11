var logos			= ["180hb.png", "brasil.png", "cyberkids.png", "dell.png", "hypermedia.png", "mamastudio.png", "microsoft.png", "millionyou.png", "mrm.png", "nextweb.png", "nokia.png", "paypass.png", "samsung.png", "sony.png", "tele2.png", "ueg.png"];
var images_old		= new Array('cover/1.jpg', 'cover/2.jpg', 'cover/3.jpg','cover/4.jpg','cover/5.jpg','cover/6.jpg','cover/10.jpg'); 


var images			= [["cover/pixelwars.jpg", "pixelwars"], ["cover/cyber_chor.jpg", "prawiechor"], ["cover/cyber_mquiz.jpg", "musiquiz"], ["cover/cyber_muzo.jpg", "muzorys"],["cover/cyber_muzolot.jpg", "muzolot"],["cover/cyber_pociag.jpg", "pociag"],["cover/cyber_rytm.jpg", "rytm"], ["cover/playpass.jpg", "paypass"],["cover/berlin_lukasz.jpg", "murgrabia-1"], ["cover/studio_perfekt.jpg", "studioperfekt"],["cover/egr_infinity.jpg", "infinity-1"],["cover/egr_infinity2.jpg", "infinity-2"],["cover/mama.jpg", , "mamastudio"]]

//,["cover/runway.jpg", "runway"],["cover/berlin_lukasz_2.jpg", "murgrabia-2"],

var present_slide	= 0; 


function drawLogos(){
        
    while(logos.length >0) {
        var ogg = Math.floor(Math.random()*logos.length);        
        document.write('<li class="logo_item">');
        document.write('<img src="img/logos/'+logos[ogg] + '" />');
		document.write('</li>');               
        logos.splice(ogg,1);          
    };        
};



function scroll(element){   

	var ele = document.getElementById(element);   
	window.scrollTo(ele.offsetLeft,ele.offsetTop); 

};

function load(action) {
	
 
	scroll("covers");

	if (action == +1) {
		
		
		if (present_slide<images.length-1) {
		
			present_slide+=1
			
		} else {
			
			present_slide=0
			
		}
			
		
		loadImage(present_slide)
		
		
	} else if (action == -1) {
							
		if (present_slide>0) {
			
			present_slide--   
			
		} else {
			
			present_slide=images.length-1
		}
		
		
		loadImage(present_slide)
	}
	
	
}

function loadImage(is){

	var file	= images[is][0]
	var trace	= images[is][1]

	//console.log(trace);

	_gaq.push(['_trackEvent', 'Cover', 'Load', trace]);

	document.images['im'].src = file;
	
}



