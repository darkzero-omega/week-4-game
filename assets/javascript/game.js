//-- Speudo Coding --//
//-- A game with 4 crytals and a random result --//
//-- every gem neeeds to have a random number between 1 and 15 --//
//-- a new random number should generate every time we win or lose --//
//-- when clickng any crystal, it should be adding with the previous result --//
//-- Untilit equals the Random Result --//
//-- if it is greater than the Random Reuslt, the weincrement a loss --//
//-- if it IS equal, then we increment a win counter--//




var random_result;
var lost;
var win;

random_result = Math.floor(Math.random() * 90) + 30; // -- hoisting --//

console.log(random_result);

$("#result").html("Random Result: " + random_result);

/for(var i = 0; i < 4; i++){

    var random = Math.floor(Math.random() * 15) + 1 ;
    console.log(random);
    
    var infStones = $("<div>");
        infStones.attr({
            "class": "infStones",
            "data-random": random
    
    });

    $(".crystals").append(infStones);
    
}

$(".increaseScore").each(function() {
    var random = Math.floor(Math.random() * 15) + 1;
    $(this).attr("data-random", random);
})

$(".increaseScore").on("click", function () {

    console.log($(this).attr("data-random"));


});



