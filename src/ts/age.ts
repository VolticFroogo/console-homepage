const dob = 1082678400000;
const millisecondsInYear = 31557600000;
let ageElements: HTMLCollectionOf<Element>;

export function updateAgeElements(): void {
    ageElements = document.getElementsByClassName('age');
}

export function updateAge(): void {
    if (ageElements !== undefined) {
        const age = ((new Date().getTime() - dob) / millisecondsInYear).toFixed(10);

        for (let i = 0; i < ageElements.length; i++) {
            ageElements[i].innerHTML = age;
        }
    }

    requestAnimationFrame(updateAge);
}