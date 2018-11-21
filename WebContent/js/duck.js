 
 
function duck(left,top,width,height,whichduck,step){
	this.down = false;
  	this.left = left;
  	this.top = top;
  	var timer=null;   
    this.sp = document.createElement('div');  
	this.sp.style.position= "absolute"; 
	this.sp.style.left = left+"px";
	this.sp.style.top = top+"px"; 
	this.sp.style.width = width+"px";
	this.sp.style.height = height+"px"; 
	this.sp.style.border="1px "
	this.sp.className = "duck";   
	this.sp.style.animation=whichduck+" 1s steps(7) infinite";
	
	document.body.appendChild(this.sp);
	
	
	var $duck=$(this.sp);
	//$duck.css("transform","rotateY(180deg)")
	//$duck.animate({left:"800px"},3000);

	var _this = this;
	timer= setInterval(RandomMove,1000);	
 
	this.sp.onmousedown = function(){       
		//clearInterval(timer);
        //timer=null;           
	 } ,
	 
	 this.getRandom1=function(start, end) {
		var length = end - start;
		var num = parseInt(Math.random() * (length) + start);
		return num;
	 }
	 
	 function GetUrlPath(){  
		　　　　var url = document.location.toString();               
		　　　　if(url.indexOf("/") != -1){  
					url = url.substring(0,  url.lastIndexOf("/")) ;  
		　　　　}  
		　　　　return url;  
		　　}  
	 function RandomMove(){
	 	var win = $(window);
	 	var windowWidth = win.width();
        var windowHeight = win.height();

	 	newx=_this.getRandom1(0,windowWidth-parseInt(_this.sp.style.width));
	 	newy=_this.getRandom1(0,windowHeight-parseInt(_this.sp.style.height)); 
		 
		if(newx>parseInt(_this.sp.style.left))
		{
			$duck.css("transform","rotateY(180deg)")
		} 
		else
		{
			$duck.css("transform","rotateY(0deg)")
		}

	 	$(_this.sp).animate({left:newx,top:newy},3000)
	} 
}
 
duck.prototype = {
  constructor:duck,
  
  getLeft:function(){
    return parseInt(this.sp.style.left);
  },
  getTop:function(){
     return parseInt(this.sp.style.top);
  },
  moveTo:function(newLeft,newTop){
  	this.sp.style.left = newLeft+"px";
	this.sp.style.top = newTop+"px";
  }
}