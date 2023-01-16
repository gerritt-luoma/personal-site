import { Card, Flex, Text, Divider } from "@mantine/core";
import { convertSecondsToString } from "@lib/timer/timerUtils";
import ChangeTime from "./ChangeTime";
import PlayPauseButton from "./PlayPauseButton";
import { useState } from "react";

export interface TimerCardProps {
    title: string,
    totalSeconds: number
}

const TimerCard = ({ title, totalSeconds }: TimerCardProps) => {
    const [remainingSeconds, setRemainingSeconds] = useState(totalSeconds);
    const [intervalID, setIntervalID] = useState(0);
    const [running, setRunning] = useState(false);

    const startTimer = () => {
        if(!intervalID) {
            setIntervalID(window.setInterval(tickTime, 1000));
            setRunning(true);
        }
    }

    const stopTimer = () => {
        if(intervalID) {
            window.clearInterval(intervalID);
            setIntervalID(0);
            setRunning(false);
        }
    }

    const tickTime = () => {
        if(0 < remainingSeconds) {
            setRemainingSeconds(remainingSeconds => remainingSeconds - 1);
        } else {
            stopTimer();
        }
    }

    const reduceTime = () => {
        if(0 > (remainingSeconds - 300)) {
            setRemainingSeconds(0);
        } else {
            setRemainingSeconds(remainingSeconds => remainingSeconds - 300);
        }
    }
    const addTime = () => {
        setRemainingSeconds(remainingSeconds => remainingSeconds + 300);
    }

    return (
        <Card radius={'md'} withBorder w={300} shadow='lg' my={'md'} sx={{borderRadius: "20px"}}>
            <Card.Section>
                <Text size={50} weight='bold' ta='center' mt='sm' mx='sm'>
                    {convertSecondsToString(remainingSeconds)}
                </Text>
            </Card.Section>
            <Divider/>
            <Card.Section>
                <Text ta='center' weight={'normal'}>
                    {title}
                </Text>
            </Card.Section>
            <Card.Section>
                <Flex justify={'space-evenly'} mx='md' align='center' m='sm'>
                    <ChangeTime text={"-5"} onClick={reduceTime}/>
                    <PlayPauseButton running={running} onClick={running ? stopTimer : startTimer}/>
                    <ChangeTime text={"+5"} onClick={addTime}/>
                </Flex>
            </Card.Section>
        </Card>
    );
}

export default TimerCard;