$(document).ready(function(){
    var year = new Date().getFullYear();
    var yetiIndex = Math.floor(Math.random() * 9);
    var score = 0;
    var tickAudio = new Audio('./Assets/audio/tick.mp3');
    var bombAudio = new Audio('./Assets/audio/bomb.mp3');
    var tadaAudio = new Audio('./Assets/audio/tada.mp3');
    
    $("#year").html(year);
    $("img").click(function() {
        if (score == 8) {
            tadaAudio.play();
            $(".popup-image").attr("src", "./Assets/images/penguin.png");
            $("#winLoss").text("You Won!!");
            $("#goodNews").text("You found all the penguins");
            $("#winLoss").css( "color", "green" );
            $(".popup-overlay, .popup-content").addClass("active");
        } else {
            if (yetiIndex == $(this).attr("value")) {
                bombAudio.play();
                $(this).attr("src", "./Assets/images/yeti.png");
                $(".popup-overlay, .popup-content").addClass("active");
            } else {
                $(this).attr("src", "./Assets/images/penguin.png");
                tickAudio.play();
                if ($(this).attr("value") == "clicked") {
                    alert("This door is already opened!!");
                }else{
                    score++;
                    $(this).attr("value", "clicked");
                }
            }
        }
      });

      $("#restart").click(function() {
        location.reload(); 
      });
  }); 