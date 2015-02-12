function enverlop(ParentId,envProperty,listImage){
	lenv = this;
	var curImg = 2;
	var curEnv = 0;
	var mainEnv,listimgenv;
	var clientX;
	var dragX = false;
	var backimgshow;
	var speedtime = 500;
	//var clientDX;
	var itime;
	
	//add audio
	var audio1;
	function addFirstEle(){
		var mainE1 = document.createElement("div");
			mainE1.className = "mainenverlop";
			mainE1.setAttribute("id",envProperty[0]);
			mainE1.style.left = envProperty[1] + "px";
			mainE1.style.top = envProperty[2] + "px";
			mainE1.style.width = envProperty[3] + "px";
			mainE1.style.height = envProperty[4] + "px";
			//effect
			mainE1.style.WebkitTransition = "all " + speedtime + "ms";
			mainE1.style.webkitTransform = "translate3d(0px,0px,0px)";
			
		var frontE1 = document.createElement("div");
			frontE1.className = "frontside";
		ParentId.appendChild(frontE1);		
		var kzindex = listImage.length;
		for(var i=0;i < listImage.length-1;i++){
			var envImg1 = document.createElement("div");
			envImg1.setAttribute("id","env" + envProperty[0] + i);
			envImg1.className = "listimgenv";
			if(i<2){
				envImg1.style.background = "url(images/" + listImage[i] + ")";	
			}
			envImg1.style.zIndex = kzindex;	kzindex--;
			//effect
			envImg1.style.WebkitTransition = "all " + speedtime +  "ms";
			envImg1.style.webkitTransform = "translate3d(0px,0px,0px)";
			mainE1.appendChild(envImg1);	
		}
		
		//add BackImage
		for(var h=0; h< 2; h++){
			var backimg1 = document.createElement("div");
			backimg1.setAttribute("id","backimgshow" + h);
			backimg1.className = "backimgshow";				
			mainE1.appendChild(backimg1);
		}
		
		ParentId.appendChild(mainE1);	
		mainEnv = ParentId.getElementsByClassName("mainenverlop")[0];
		listimgenv = ParentId.getElementsByClassName("listimgenv");
		backimgshow = ParentId.getElementsByClassName("backimgshow");
		if(navigator.platform== "iPad"){
			document.body.addEventListener("touchstart",mouseDown,false);
			document.body.addEventListener("touchend",mouseUp,false);
			document.body.addEventListener("touchmove",mouseMove,false);
		} else {
			document.body.addEventListener("mousedown",mouseDown,false);
			document.body.addEventListener("mouseup",mouseUp,false);
			document.body.addEventListener("mouseout",mouseUp,false);
			document.body.addEventListener("mousemove",mouseMove,false);
		}
		
	}
	
	function setMove(ele,pointDes,stime){
		ele.style.WebkitTransitionDuration = stime +  "ms";
		ele.style.webkitTransform = "translate3d(0px," + pointDes +"px,0px)";
		
	}
	
	function mouseDown(e){
		clientX = getClientPos(e);
		dragX = true;
	}
	
	function mouseUp(e){
		var clientX1 = getClientPos(e);
		var clientDX = clientX1 - clientX;
		
		if(Math.abs(clientDX)>100 && dragX ){
			if(clientDX > 0 && curEnv > 0) {
				//console.log("go down");
				curEnv--;
				var curObj = listimgenv[curEnv];
				setMove(curObj,0,speedtime);	
				
				
			} else if (clientDX < 0 && curEnv < listImage.length-1) {
				//console.log("go up: " + curEnv);
				var curObj = listimgenv[curEnv];	
				setMove(curObj,-768,speedtime);
				audio1.play();
				curEnv++;
			}
			
			if(curImg<listImage.length-1){
				listimgenv[curImg].style.background = "url(images/" + listImage[curImg] + ")";	
				curImg++;	
			}
			
			clearTimeout(itime);
			if(curEnv == listImage.length-2){
				backimgshow[0].style.display = "none";
				backimgshow[1].style.display = "none";	
			} else if (curEnv == listImage.length-3) {
				backimgshow[1].style.display = "none";
				itime = setTimeout(function(){
					backimgshow[0].style.display = "block";
				},speedtime)
				
			} else if (curEnv <= listImage.length-4){
				 itime = setTimeout(function(){
					backimgshow[0].style.display = "block";
					backimgshow[1].style.display = "block";
				},speedtime);
				
			}
			
		}
		clientX = clientX1;
		dragX = false;
	}
	
	function mouseMove(e){
		if(!dragX) return;
	}
	
	function getClientPos(e){
		var obj;
		if(navigator.platform == "iPad"){
				obj = e.changedTouches[0].clientY
		} else {
				obj = e.clientY
		}
		return obj;
	}
	
	
	
	
	function init(){
		addFirstEle();
		audio1 = document.getElementById("audio1");
		console.log(audio1);
		setTimeout(function(){
			setMove(mainEnv,-638,speedtime);
		},speedtime/2);

	}
	init();
}