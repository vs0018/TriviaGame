$(document).ready(function(){

    $("#container, #endGame, #time, #secondTitle").hide();

    $("#start").click(function () {
        $("#container, #time, #secondTitle").show();
        
        $("#winona, #button, #firstTitle").hide();
        
        setTimeout(function(){
            $("#endGame").show();
        
            $("#questions, #timer").hide();
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

        var oneMinute = 60 * 1,
        display = document.querySelector('#timer');
        startTimer(oneMinute, display);
    });


});





















//variables needed:
    //game object
        //question objects (4)
            //answer property: boolean (true/false) value
        //player response array (booleans)





//when player clicks a button to start the game, a question is randomly selected from the trivia array



//display it on the page & start countdown









//player selects an answer


//player's answer is compared to the boolean value of the current question object


//result stored as boolean in its own array (response array)

//use "responses[index] = evaluated answer" or push ("responses.push(evaluated answer)")?

//run function to generate next question is called







//when time runs out, use Array.filter() method to create new array (true responses) from the response array

//determine # of the player's answers that evaluated to 'true' by getting length of true responses array


//display length of this array (# of trues) / total number of questions