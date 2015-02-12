window.onload = function(){
	document.body.addEventListener('touchmove',function(e){e.preventDefault();},false);
	var mainipad = document.getElementById("mainipad");
	var listImage = ['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg','17.jpg','18.jpg','19.jpg','20.jpg','21.jpg','22.jpg'];
	//var listImage = ['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'];
	var envProperty = ["env",91,768,820,650]; // Id, left, top, width, height
	var nObj = new enverlop(mainipad,envProperty,listImage)	
}
