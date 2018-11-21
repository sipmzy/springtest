var robot2 = function(left,top,width,height,imgsrc,step) {  
    var obj = new Object();  
    obj.left=left;
    obj.top=top;
    obj.width=width;
    obj.height=height,
    obj.imgsrc=imgsrc;
    obj.step=step;     

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
	this.sp.className = "sprit";
	
	var bigImg = document.createElement("img"); 
    bigImg.src=imgsrc; 
    bigImg.width=width;   
    bigImg.height=height;  
    this.sp.appendChild(bigImg);    
	document.body.appendChild(this.sp);

	var _this = this;
	this.sp.onmousedown = function(){       
            if(timer==null)
            {
            	timer= setInterval(RandomMove,1000);
            }
            else
            {
            	clearInterval(timer);
            	timer=null;
            }           
	 } ,
	 
	 this.getRandom1=function(start, end) {
		var length = end - start;
		var num = parseInt(Math.random() * (length) + start);
		return num;
     }

	 function RandomMove(){
	 	var win = $(window);
	 	var windowWidth = win.width();
        var windowHeight = win.height();

	 	newx=_this.getRandom1(0,windowWidth-parseInt(_this.sp.style.width));
	 	newy=_this.getRandom1(0,windowHeight-parseInt(_this.sp.style.height)); 
	 	
	 	$(_this.sp).animate({left:newx,top:newy},"slow")
	} 

    obj.area = function( r ) {  
        return this.left * r * r;  
    }  
    return obj;  
 }  
 