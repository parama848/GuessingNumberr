var guessNumber = document.getElementById("guess")
var Value = document.getElementById("result")
var RandomNumber = Math.floor(Math.random() * 10) + 1
var score = document.getElementById("score")
var Tscore = 10

function check() {
    var EneteredNumber = guessNumber.value

    if (EneteredNumber == RandomNumber) {

        alert("YOU WON!!")
        Value.textContent = "Right"
        window.location.reload()

    }
    else if (EneteredNumber > 10) {
        alert("Invalid Number Your Number must be in 1 to 10")
        Value.textContent = "Sorry click Try again"

    }
    else {
        Value.textContent = "Wrong"
        Tscore -= 1
        score.textContent = "Score:" + Tscore

        if (Tscore == 0) {
            alert("You Loose!!")
        }

    }
}

function tryagain() {
    window.location.reload()
}
