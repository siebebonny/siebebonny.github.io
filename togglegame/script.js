$("td").each(function(){
    var getal = Math.floor(Math.random() *10) +1; 
    if (getal % 2 ==0){
        $(this).addClass("blauw")
        $(this).removeClass("rood")  
    } else{
        $(this).addClass("rood")
        $(this).removeClass("blauw")
    }
})




$("td").click(function(){
    if ($(this).hasClass("rood")){
        $(this).addClass("blauw")
        $(this).removeClass("rood")
    } else{
        $(this).addClass("rood")
        $(this).removeClass("blauw")
    }
    if ($(this).prev().hasClass("rood")) { 
        $(this).prev().removeClass("rood"); 
        $(this).prev().addClass("blauw");    
    } else { 
        $(this).prev().removeClass("blauw");  
        $(this).prev().addClass("rood");   
    }
    if ($(this).next().hasClass("rood")) { 
        $(this).next().removeClass("rood"); 
        $(this).next().addClass("blauw");    
    } else { 
        $(this).next().removeClass("blauw");  
        $(this).next().addClass("rood");   
    }
        var index = $(this).index();
        var cell_boven = $(this).parent().prev().children(":nth("+index+")")
        var cell_onder = $(this).parent().next().children(":nth("+index+")")
    
    if (cell_boven.hasClass("rood")) {    
    cell_boven.removeClass("rood");  
    cell_boven.addClass("blauw");  
    } else { 
    cell_boven.removeClass("blauw");  
    cell_boven.addClass("rood");}
    
    if (cell_onder.hasClass("rood")) {    
    cell_onder.removeClass("rood");  
    cell_onder.addClass("blauw");  
    } else { 
    cell_onder.removeClass("blauw");  
    cell_onder.addClass("rood");}

})