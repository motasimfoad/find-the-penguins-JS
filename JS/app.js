$(document).ready(function(){
    var year = new Date().getFullYear();
    var yetiIndex = Math.floor(Math.random() * 9);
    var cloudsArray = $("img");
    var score = 0;
    $("#year").html(year)
   
    $("img").click(function() {
        if (yetiIndex == $(this).attr("value")) {
            $(this).attr("src", "./Assets/images/yeti.png");
            $(".popup-overlay, .popup-content").addClass("active");
        } else {
            $(this).attr("src", "./Assets/images/penguin.png");
            score++;
        }
        console.log(score);
      });
      $("#close").click(function() {
          console.log("lala");
        location.reload(); 
      });
  }); 