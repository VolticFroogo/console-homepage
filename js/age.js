const dob = 1082678400000;
const secondsInYear = 31536000000;

function updateAge() {
    const age = ((new Date().getTime() - dob) / secondsInYear).toFixed(10);

    const els = document.getElementsByClassName('age');

    for (let i = 0; i < els.length; i++) {
        els[i].innerHTML = age;
    }

    requestAnimationFrame(updateAge);
}