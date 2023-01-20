import { endsWithNumber } from "@lib/regexps";

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

interface TaskAndTime {
    task: string,
    time?: number
}
// Expect that the form will validate the input before inputting to the form
export function parseTaskAndTime(input: string): TaskAndTime {
    const ret: TaskAndTime = { task: '' };

    // Check if string ends with number
    if(endsWithNumber.test(input)) {
        const splitString = input.split(' ');
        ret.time = Number(splitString.at(-1));
        splitString.pop();
        ret.task = splitString.join(' ');
    } else {
        ret.task = input;
    }
    return ret;
}
