 $(function(){ 	
  
     $(".startBtn").click(function (e) { 
        $(this).hide();
        $('#start').removeClass("start1");
        $('#start').addClass("start2");
        // $('#start').css("background-image","url('image/bg_game.jpg')");
       
        // var r1 = new robot(350, 100, 50, 50, curpath+"/image/sprit1.png", 100);
        //var sp = new sprit(150, 100, 50, 50, curpath+"/image/sprit1.png", 100);
        
        var sp4 = new duck(200, 200, 200, 200, "duck_4", 40);
        var sp1 = new duck(0, 0, 200, 200, "duck_1", 10);
        var sp2 = new duck(600, 300, 200, 200, "duck_2", 20);
        var sp3 = new duck(100, 100, 200, 200, "duck_3", 30);
        
    });

  
 })
               
 