var year = new Date().getFullYear();
var yetiIndex = Math.floor((Math.random() * 9) + 1);
var score = 0;
var highScore = 0;
var tickAudio = new Audio('./Assets/audio/tick.mp3');
var bombAudio = new Audio('./Assets/audio/bomb.mp3');
var tadaAudio = new Audio('./Assets/audio/tada.mp3');
var imgArr;
bombAudio.volume = 0.3;

console.log(yetiIndex);


var resetGame = function() {
    for (let i = 0; i < imgArr.length; i++) {
        i = parseInt(i+1);
        $("img").each(function (i) {
        $(this).attr("value", (i));
            
        });
        //attr("value", (i));
        // element = imgArr[i];
        console.log(i);
    }
    score = 0;
    yetiIndex = Math.floor((Math.random() * 9) + 1);
    var element;
    $(".popup-overlay, .popup-content").removeClass("active");
    $("img").attr("src", "./Assets/images/door.png");
    $("#score").text(score);
    console.log(score + " "+highScore+ " "+yetiIndex + " "+typeof(yetiIndex)+ " "+typeof($("img").attr("value"))+ " "+imgArr.length);
}

$(document).ready(function(){
   $("#year").html(year);
    imgArr = $("img");
    console.log(imgArr.length);
    $("img").click(function() {
        console.log(($(this).attr("value")));
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
            sessionStorage.setItem('hS', highScore);
            var aValue = sessionStorage.getItem('hS');
            $("#high-score").text(highScore);
        }
      });

      $("#restart").click(function() {
        // location.reload(); 
        resetGame();
      });
  }); 