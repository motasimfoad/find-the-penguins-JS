$(document).ready(function(){
    var year = new Date().getFullYear();
    var yetiIndex = Math.floor(Math.random() * 9);
    var score = 0;
    var tickAudio = new Audio('./Assets/audio/tick.mp3');
    var bombAudio = new Audio('./Assets/audio/bomb.mp3');
    bombAudio.volume = 0.3;
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


  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  $(document).ready(function(){
    var year = new Date().getFullYear();
    var yetiIndex = Math.floor((Math.random() * 9) + 1);
    var score = 0;
    var tickAudio = new Audio('./Assets/audio/tick.mp3');
    var bombAudio = new Audio('./Assets/audio/bomb.mp3');
    bombAudio.volume = 0.3;
    var tadaAudio = new Audio('./Assets/audio/tada.mp3');
    $("#year").html(year);
    var imgArr = $("img");
    
    // $("img").click(function() {
    //     $("#score").text(score+1);
        
    //     if (score > 7) {
    //         tadaAudio.play();
    //         $(".popup-image").attr("src", "./Assets/images/penguin.png");
    //         $("#winLoss").text("You Won!!");
    //         $("#goodNews").text("You found all the penguins");
    //         $("#winLoss").css( "color", "green" );
    //         $(".popup-overlay, .popup-content").addClass("active");
    //     } else {
    //         if (yetiIndex == $(this).attr("value")) {
    //             bombAudio.play();
    //             $(this).attr("src", "./Assets/images/yeti.png");
    //             $(".popup-overlay, .popup-content").addClass("active");
    //         } else {
    //             if ($(this).attr("value") == "clicked") {
    //                 alert("This door is already opened!!");
    //             }else{
    //                 $(this).attr("src", "./Assets/images/penguin.png");
    //                 tickAudio.play();
    //                 $(this).attr("value", "clicked");
                    
    //             }
    //         }
    //     }
        // var imgArr = $("img").val();
        // for (let i = 0; i < imgArr.length; i++) {
        //     const element = imgArr[i];
        //     if (element.value == "clicked") {
        //         score++;  
        //     }
        // }
       
     // });

     console.log(yetiIndex);
     console.log(imgArr);

      $("img").click(function() {
        $("#score").text(score+1);
        if ($(this).attr("value") == "clicked") {
            alert("This door is already opened!!");
        }else if (score == 8) {
                tadaAudio.play();
                $(".popup-image").attr("src", "./Assets/images/penguin.png");
                $("#winLoss").text("You Won!!");
                $("#goodNews").text("You found all the penguins");
                $("#winLoss").css( "color", "green" );
                $(".popup-overlay, .popup-content").addClass("active");
            } else if (yetiIndex == $(this).attr("value")) {
                    bombAudio.play();
                    $(this).attr("src", "./Assets/images/yeti.png");
                    $(".popup-overlay, .popup-content").addClass("active");
                } else if ($(this).attr("value") != "clicked") {
                    $(this).attr("value", "clicked");
                    $(this).attr("src", "./Assets/images/penguin.png");
                    tickAudio.play();
                    score++;
                }
      });

      $("#restart").click(function() {
        // location.reload(); 
        score = 0;
        var element;
        for (let i = 0; i < imgArr.length; i++) {
            $("img").attr("src", "./Assets/images/door.png");
            $("img").attr("value", (i));
            element = imgArr[i];
            console.log(element);
            yetiIndex = Math.floor((Math.random() * 9) + 1);
        }
       
        $(".popup-overlay, .popup-content").removeClass( "active" );
       
      });
  }); 