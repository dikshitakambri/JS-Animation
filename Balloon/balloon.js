const successURL = "https://giphy.com/gifs/workingtitlefilms-mr-bean-rowan-atkinson-beans-holiday-kfRlTZDvhLCPvOEey8";
const failURL    = "https://giphy.com/gifs/fail-sad-pop-jaAXjJcaTngemp4vK8";
const duration   = 10000;

let balloons = [document.querySelector("#greenBalloon"),
               document.querySelector("#redBalloon"),
               document.querySelector("#yellowBalloon")]
let numStopped = 0;

balloons.forEach((balloon) => {
    balloon.animation = balloon.animate([{top: "80vh"}, {top: "5vh"}], {duration: 10000, fill: "forwards"});
    balloon.addEventListener("click", (e) => {
        e.currentTarget.animation.pause();
        numStopped++;
        if (numStopped > 2) {
            window.location.href = successURL;
        }
    })
});

animations.forEach((animation) => {
    animation.onfinish = () => {
        window.location.href = failURL;
    }
});