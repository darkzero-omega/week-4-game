//-- Speudo Coding --//
//-- A game with 4 crytals and a random result --//
//-- every gem neeeds to have a random number between 1 and 15 --//
//-- a new random number should generate every time we win or lose --//
//-- when clickng any crystal, it should be adding with the previous result --//
//-- Untilit equals the Random Result --//
//-- if it is greater than the Random Reuslt, the weincrement a loss --//
//-- if it IS equal, then we increment a win counter--//



var goal = Math.floor(Math.random() * (121 - 19 + 1));
        var userScore = 0;
        var wins = 0;
        var powerStone = Math.floor(Math.random() * (12 - 1 + 1) + 1);
        var timeStone = Math.floor(Math.random() * (12 - 1 + 1) + 1);
        var soulStone = Math.floor(Math.random() * (12 - 1 + 1) + 1);
        var spaceStone = Math.floor(Math.random() * (12 - 1 + 1) + 1);
        var realityStone = Math.floor(Math.random() * (12 - 1 + 1) + 1);
        var mindStone = Math.floor(Math.random() * (12 - 1 + 1) + 1);

        console.log(goal); 
        console.log(powerStone); 
        console.log(timeStone); 
        console.log(soulStone); 
        console.log(spaceStone); 
        console.log(realityStone); 
        console.log(mindStone); 
        
        //--Main--//
        $(document).ready(function () {

            //var toGoal = $("#goalcounter");

            function reset() {
                goal = Math.floor(Math.random() * (121 - 19 + 1) + 19);
                $("#goalcounter").text(goal);
                userScore = 0;
                $("#scorecounter").text(userScore);
                powerStone = Math.floor(Math.random() * (12 - 1 + 1) + 1);
                timeStone = Math.floor(Math.random() * (12 - 1 + 1) + 1);
                soulStone = Math.floor(Math.random() * (12 - 1 + 1) + 1);
                spaceStone = Math.floor(Math.random() * (12 - 1 + 1) + 1);
                realityStone = Math.floor(Math.random() * (12 - 1 + 1) + 1);
                mindStone = Math.floor(Math.random() * (12 - 1 + 1) + 1);
                console.log(goal);
                console.log(powerStone); 
                console.log(timeStone); 
                console.log(soulStone); 
                console.log(spaceStone); 
                console.log(realityStone); 
                console.log(mindStone); 
            };

            $("#goalcounter").text(goal);


            $(".powerStone").on("click", function () {
                userScore = userScore + powerStone;
                $("#scorecounter").text(userScore);
                if (userScore === goal) {
                    alert("You win!");
                    wins++
                    $("#wincounter").text(wins);
                    reset();
                } else if (userScore > goal) {
                    alert("You lose!");
                    reset();
                }
            });


            $(".timeStone").on("click", function () {
                userScore = userScore + timeStone;
                $("#scorecounter").text(userScore);
                if (userScore === goal) {
                    alert("You win!");
                    wins++
                    $("#wincounter").text(wins);
                    reset();
                } else if (userScore > goal) {
                    alert("You lose!");
                    reset();
                }
            });


            $(".soulStone").on("click", function () {
                userScore = userScore + soulStone;
                $("#scorecounter").text(userScore);
                if (userScore === goal) {
                    alert("You win!");
                    wins++
                    $("#wincounter").text(wins);
                    reset();
                } else if (userScore > goal) {
                    alert("You lose!");
                    reset();
                }
            });


            $(".spaceStone").on("click", function () {
                userScore = userScore + spaceStone;
                $("#scorecounter").text(userScore);
                if (userScore === goal) {
                    alert("You win!");
                    wins++
                    $("#wincounter").text(wins);
                    reset();
                } else if (userScore > goal) {
                    alert("You lose!");
                    reset();
                }
            });
            $(".realityStone").on("click", function () {
                userScore = userScore + realityStone;
                $("#scorecounter").text(userScore);
                if (userScore === goal) {
                    alert("You win!");
                    wins++
                    $("#wincounter").text(wins);
                    reset();
                } else if (userScore > goal) {
                    alert("You lose!");
                    reset();
                }
            });
            $(".mindStone").on("click", function () {
                userScore = userScore + mindStone;
                $("#scorecounter").text(userScore);
                if (userScore === goal) {
                    alert("You win!");
                    wins++
                    $("#wincounter").text(wins);
                    reset();
                } else if (userScore > goal) {
                    alert("You lose!");
                    reset();
                }
            });

        });