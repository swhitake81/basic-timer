const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause')
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let originalDuration = 0;
let currentDuration;
const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuration) {
        if (originalDuration == 0) {
            originalDuration = totalDuration
        }
        currentDuration = totalDuration;
    },
    onTick(timeRemaining) {
        circle.setAttribute(
            'stroke-dashoffset', 
            perimeter * timeRemaining / originalDuration - perimeter
        )
    },
    onComplete() {
        console.log('timer complete');
    }
});