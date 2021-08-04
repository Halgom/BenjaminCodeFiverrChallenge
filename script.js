document.addEventListener("mousemove", parallax);
const back = document.querySelector("#back");
const middle = document.querySelector("#middle");
const front = document.querySelector("#front");

function parallax (e) {
    let x = (e.clientX - (window.innerWidth/2));
    // Change the value of the divider for more or less parallax effect
    let backX = -50 + (x * 0.01);
    let middleX = -50 - (x * 0.01);
    let frontX = -50 - (x * 0.5);
    back.style.transform = `translateX(${backX}%)`;
    middle.style.transform = `translateX(${middleX}%)`;
    front.style.transform = `translateX(${frontX}%)`;
}