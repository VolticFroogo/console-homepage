export function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * Math.floor(max - min)) + min;
}

export function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}