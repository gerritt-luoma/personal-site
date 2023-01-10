

export function convertSecondsToString(numSeconds: number) {
    // numSeconds should ideally never be below zero, handle it in this case
    if(numSeconds <= 0) {
        return "00:00"
    }

    const minutes = Math.floor(numSeconds/60);
    const minutesStr = minutes < 10 ? `0${minutes}` : minutes.toString();
    const seconds = numSeconds%60;
    const secondsStr = seconds < 10 ? `0${seconds}` : seconds.toString();

    return `${minutesStr}:${secondsStr}`
}