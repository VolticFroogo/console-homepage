function getRandomInt(min, max) {
    return Math.floor(Math.random() * Math.floor(max - min)) + min;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}