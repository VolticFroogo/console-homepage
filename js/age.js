const dob = 1082678400000;
const secondsInYear = 31536000000;
let ageElements;

function updateAgeElements() {
    ageElements = document.getElementsByClassName('age');
}

function updateAge() {
    if (ageElements !== undefined) {
        const age = ((new Date().getTime() - dob) / secondsInYear).toFixed(10);

        for (let i = 0; i < ageElements.length; i++) {
            ageElements[i].innerHTML = age;
        }
    }

    requestAnimationFrame(updateAge);
}