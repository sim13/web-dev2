//var city0 = "Mumbai" ; 
//var city1 = "Delhi" ;
//alert ("My favourite city " + city1);
document.getElementById("a1").addEventListener("click", function(){
	
    document.getElementById("overlay").style.opacity =0.6;
	document.getElementById("form-wrapper").style.opacity =1;
	document.getElementById("overlay").style.pointerEvents = "auto";
	document.getElementById("form-wrapper").style.pointerEvents ="auto";

});

document.getElementById("cross").addEventListener("click", function(){
	
    document.getElementById("overlay").style.opacity =0;
	document.getElementById("form-wrapper").style.opacity =0;
	document.getElementById("overlay").style.pointerEvents = "none";
	document.getElementById("form-wrapper").style.pointerEvents ="none";
});

// var person =prompt("Please enter your name ")
// if (person!=null)	{

	// document.getElementById("demo").innerHTML = "Hello" + " " + person + "!!"  ;

// }

document.getElementById("cross-2").addEventListener("click" , function(){

	document.getElementById("overlay").style.opacity =0 ;
	document.getElementById("overlay").style.pointerEvents ="none" ;


})

$(document).ready(function(){
	// $("#hide_button").click(function(){
	// $("#demo2").hide();
 })
 
var image_slide = new Array(); // create array

var step =0;
image_slide[0] = new Image (); //instance of Image Object
	image_slide[0].src ="mumbai-pics.jpg" ;
	image_slide[1] = new Image ();
	image_slide[1].src = "uedinburgh.jpg";
	image_slide[2]= new Image ();
	image_slide[2].src ="ee.jpg" ;
function slide_show(){
 if(step <3)
 {
 	console.log("here",step);
 	document.getElementsByClassName('slides').src =image_slide[step].src;
 	step ++;
 }
 else 
 	step =0;
 setTimeout("slide_show()", 2500);

}

document.getElementById("icon-1").addEventListener("click" , function(){

	document.getElementById("overlay").style.opacity =0.8 ;

    slide_show();

})


