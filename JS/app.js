$(document).ready(function(){
    var year = new Date().getFullYear();
    var yetiIndex = Math.floor(Math.random() * 9);
    var cloudsArray = $("img");
    var score = 0;
    $("#year").html(year)
   console.log(yetiIndex);
    $("img").click(function() {
        if (score == 8) {
            $(".popup-image").attr("src", "./Assets/images/penguin.png");
            $("#winLoss").text("You Won!!");
            $("#goodNews").text("You found all the penguins");
            $("#winLoss").css( "color", "green" );
            $(".popup-overlay, .popup-content").addClass("active");
        } else {
            if (yetiIndex == $(this).attr("value")) {
                $(this).attr("src", "./Assets/images/yeti.png");
                $(".popup-overlay, .popup-content").addClass("active");
            } else {
                $(this).attr("src", "./Assets/images/penguin.png");
                if ($(this).attr("value") == "clicked") {
                    alert("This door is already opened!!");
                }else{
                    score++;
                    $(this).attr("value", "clicked");
                }
            }
            console.log(score);  
        }
        
      });

      $("#restart").click(function() {
        location.reload(); 
      });
  }); 