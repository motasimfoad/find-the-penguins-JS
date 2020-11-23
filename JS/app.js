$(document).ready(function(){
    var year = new Date().getFullYear();
    var yetiIndex = Math.floor(Math.random() * 10);
    $("#year").html(year)

    $("clouds").hover(function(){
        $(this).css("backgroundColor", "red")
    },
    function(){
        $(this).css("color", "black")
    });
  }); 