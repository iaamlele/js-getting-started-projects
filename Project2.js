var buttonColours = ["red", "blue", "green", "yellow"]
var gamePattern = []
var highscore = 0
var level = 0
var started = false
var userClickedPattern = []


$(".startgame").click(function(event) {
    if (started === false) {
        nextSequence()
        started = true
        $(".startgame").hide()
    }
})

function nextSequence() {
    userClickedPattern = []
    level ++
    $("#level-title").text("Level" + level)
    var randomNumber = Math.floor(Math.random() * 4)
    var randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)
    playPattern()
}

function playPattern() {
    var i = 0
    const interval_check = setInterval(function() {
        $("#" + gamePattern[i]).fadeOut(100).fadeIn(100)
        playSound(gamePattern[i])
        i ++
        if (i === gamePattern.length) {
            clearInterval(interval_check)
        }
    }, 1000)
}

function playSound(name) {
    let sound = new Audio("../sounds/" + name + ".mp3")
    sound.play()
}

$(".btn").click(function(event) {
    
    if (started === true) {
        var userChosenColour = $(this).attr("id")
        userClickedPattern.push(userChosenColour)
        playSound(userChosenColour)
        animatePress(userChosenColour)
        checkAnswer(userClickedPattern.length-1)
    }
})

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed")
    setTimeout(function() {
        $("#" +currentColor).removeClass("pressed")
    }, 100)
}

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence()
            }, 100)
        }
    }else {
        playSound("wrong")
        $("body").addClass("game-over")
        $("#level-title").text("Game Over, Press Go to Restart")

        setTimeout(function(){
            $("body").removeClass("game-over")
        }, 100)

        startOver()
    }
}

function startOver() {
    if(level > highscore) {
        highscore = level - 1
        $("h3").text("High Score: " + highscore)
    }
    level = 0
    gamePattern = []
    started = false
    $(".startgame").show()
}