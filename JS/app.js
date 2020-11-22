$(document).ready(function(){
    var year = new Date().getFullYear();
    $("#year").html(year)

    $("h1").hover(function(){
        $(this).css("color", "red")
    },
    function(){
        $(this).css("color", "black")
    });
  }); 