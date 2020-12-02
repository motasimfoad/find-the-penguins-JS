var year = new Date().getFullYear();
var yetiIndex = Math.floor((Math.random() * 9) + 1);
var score = 0;
var highScore = 0;
var tickAudio = new Audio('./Assets/audio/tick.mp3');
var bombAudio = new Audio('./Assets/audio/bomb.mp3');
var tadaAudio = new Audio('./Assets/audio/tada.mp3');
var imgArr;
bombAudio.volume = 0.3;

var resetGame = function() {
    for (let i = 0; i < imgArr.length; i++) {
        i = parseInt(i+1);
        $("img").each(function (i) {
        $(this).attr("value", (i));
            
        });
    }
    score = 0;
    yetiIndex = Math.floor((Math.random() * 9) + 1);
    $(".popup-overlay, .popup-content").removeClass("active");
    $("img").attr("src", "./Assets/images/door.png");
    $("#score").text(score);
}

$(document).ready(function(){
   $("#year").html(year);
    imgArr = $("img");
    $("img").click(function() {
        if (score == (imgArr.length-2)) {
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
                $(".popup-image").attr("src", "./Assets/images/yeti.png");
                $("#winLoss").text("Yati killed you!!");
                $("#winLoss").css( "color", "red" );
                $(".popup-overlay, .popup-content").addClass("active");
        } else {
                $(this).attr("src", "./Assets/images/penguin.png");
                tickAudio.play();
                if ($(this).attr("value") == "clicked") {
                    alert("This door is already opened!!");
                }else{
                    score++;
                    $("#score").text(score);
                    $(this).attr("value", "clicked");
                }
            }
        }
        if (score > highScore) {
            highScore = score;
            $("#high-score").text(highScore);
        }
      });

      $("#restart").click(function() {
        resetGame();
      });
  }); 