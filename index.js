document.addEventListener('DOMContentLoaded', function () {

    // Detecting Mouse Click

    const elements = document.querySelectorAll(".drum");

    for (i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", function () {
            playChecker(this.innerHTML);
            buttonAnimation(this.innerHTML);
        });
    }

    // Detecting Keyboard Button Press

    document.addEventListener("keydown", function (event) {
        playChecker(event.key);
        buttonAnimation(event.key)
    });

    // Check if correct button to play sound has been pressed

    function playChecker(event) {
        switch (event) {
            case "w":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            case "s":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            case "d":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
            case "j":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
            case "k":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
            case "l":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;
            default:
                console.log("unexpected error");
                break;
        }
    }

    function buttonAnimation(currentKey) {
        var activeButton = document.querySelector("." + currentKey);
        activeButton.classList.add("pressed");
        setTimeout(function() {
            activeButton.classList.remove("pressed");
        }, 100) 
    }

});