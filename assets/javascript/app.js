$(document).ready(function(){
    $("#container, #endGame, #time, #secondTitle").hide();

    $("#start").click(function () {
        var oneMinute = 60 * 1;

        $("#container, #time, #secondTitle").show();
        
        $("#winona, #button, #firstTitle").hide();

        setTimeout(function(){
            stopGame();

            $("#endGame").show();
        
            $("#questions, #time").hide();
        }, 60000);

        function startTimer(duration, display) {
            var timer = duration, minutes, seconds;
            setInterval(function () {
                minutes = parseInt(timer / 60, 10)
                seconds = parseInt(timer % 60, 10);
        
                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;
        
                display.textContent = minutes + ":" + seconds;
        
                if (--timer < 0) {
                    timer = duration;
                }
            }, 1000);
        }

        function stopGame (){
            var completed = 0;
            var correct = 0;
            var incorrect = 0;
            var unanswered = 0;

            var answers = $(".answers").children.checked
        
        //need to figure out this score logic
                if (answers === "true") {
                    completed++;
                };

                $("#correct").text(correct);
                $("#incorrect").text(incorrect);
                $("#unanswered").text(unanswered);
            };
            
        //need to create submit button logic to hide questions
        //and call stopGame function

        display = document.querySelector('#timer');
        
        startTimer(oneMinute, display);
        
    });


});