$(document).ready(function(){
    $("#menu__itemsPlus").click(function(){
    	$("#menu__itemsPlus").hide();
        $(".menu__items2, #menu__itemsMinus").css("display", "flex");
    });
    $("#menu__itemsMinus").click(function(){
    	$(".menu__items2, #menu__itemsMinus").hide();
        $("#menu__itemsPlus").css("display", "flex");
    });
});