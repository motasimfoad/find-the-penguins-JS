$(document).ready(function(){
    var year = new Date().getFullYear();
    var yetiIndex = Math.floor(Math.random() * 10);
    var cloudsArray = $("img");
    console.log(cloudsArray[yetiIndex]);
    $("#year").html(year)
    
    $("img").click(function() {
        if (yetiIndex == $(this).attr("value")) {
           $(this).attr("src", "./Assets/images/yeti.jpg");
        } else {
            $(this).attr("src", "./Assets/images/penguin.png");
        }
       
      });
    
  }); 