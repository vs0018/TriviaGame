$(document).ready(function(){

    $("#container, #endGame, #timer, #secondTitle").hide();

    $("#start").click(function () {
        $("#container, #timer, #secondTitle").show();
        $("#winona, #button, #firstTitle").hide();

    })
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