
// "use strict"
// let video = document.querySelector(".video");
//
// // Get the button
// let btn = document.querySelector(".btn");
//
// // Pause and play the video, and change the button text
// function playFunction() {
//     if (video.paused) {
//         video.play();
//         btn.classList.remove('\\f04b');
//         btn.classList.add('btn');
//         btn.classList.add('fa');
//         btn.innerHTML = "Pause";
//     } else {
//         video.pause();
//         btn.classList.remove('\\f04c');
//         btn.classList.add('btn');
//         btn.classList.add('fa');
//         btn.innerHTML = "\\f04c";
//     }

// }
let burger = document.getElementById('burger'),
    nav    = document.getElementById('main-nav'),
    slowmo = document.getElementById('slowmo');

burger.addEventListener('click', function(e){
    this.classList.toggle('is-open');
    nav.classList.toggle('is-open');
});

slowmo.addEventListener('click', function(e){
    this.classList.toggle('is-slowmo');
});


let clickEvent = new Event('click');

window.addEventListener('load', function(e) {
    slowmo.dispatchEvent(clickEvent);
    burger.dispatchEvent(clickEvent);

    setTimeout(function(){
        burger.dispatchEvent(clickEvent);

        setTimeout(function(){
            slowmo.dispatchEvent(clickEvent);
        }, 3500);
    }, 5500);
});
