import { convertSecondsToString } from "@lib/timer/timerUtils";
import { Flex, Text } from "@mantine/core";
import { useState } from "react";
import ChangeTime from "./ChangeTime";
import PlayPauseButton from "./PlayPauseButton";

interface CountdownProps {
    totalSeconds: number,
    title: string
}

const Countdown = ({ totalSeconds, title }: CountdownProps) => {
    const [remainingSeconds, setRemainingSeconds] = useState(totalSeconds);
    const [intervalId, setIntervalId] = useState(0);
    const [running, setRunning] = useState(false);

    const startTimer = () => {
        if(!intervalId) {
            setIntervalId(window.setInterval(handleInterval, 1000));
            setRunning(true);
        }
    }

    const stopTimer = () => {
        if(intervalId) {
            window.clearInterval(intervalId);
            setIntervalId(0);
            setRunning(false);
        }
    }


    const handleInterval = () => {
        if(0 < remainingSeconds) {
            setRemainingSeconds(remainingSeconds => remainingSeconds - 1);
        } else {
            stopTimer();
        }
    }

    const addTime = () => {
        setRemainingSeconds(remainingSeconds => remainingSeconds + 300);
    }

    const reduceTime = () => {
        if(remainingSeconds > 300) {
            setRemainingSeconds(remainingSeconds => remainingSeconds - 300);
        } else {
            setRemainingSeconds(0);
        }
    }

    return(
        <Flex direction={'column'} align='center' gap='sm' w={300}>
            <Text size={40} fw='bold'>
                {convertSecondsToString(remainingSeconds)}
            </Text>
            <Text>
                {title}
            </Text>
            <Flex w='100%' align='center' justify='center' gap='sm'>
                <ChangeTime onClick={reduceTime} text={'-5'}/>
                <PlayPauseButton running={running} onClick={running ? stopTimer : startTimer}/>
                <ChangeTime onClick={addTime} text={'+5'}/>
            </Flex>
        </Flex>
    )
}

export default Countdown;