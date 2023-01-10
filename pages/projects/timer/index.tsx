import { useState } from "react";
import { Title, Button, Flex, Card } from "@mantine/core";
import { convertSecondsToString } from "@lib/timer/timerUtils";

const Timer = () => {
    const [remainingSeconds, setRemainingSeconds] = useState(5);
    const [intervalID, setIntervalID] = useState(0);

    const startTimer = () => {
        if(!intervalID) {
            setIntervalID(window.setInterval(tickTime, 1000))
        }
    }

    const stopTimer = () => {
        if(intervalID) {
            window.clearInterval(intervalID);
            setIntervalID(0);
        }
    }

    const tickTime = () => {
        if(0 < remainingSeconds) {
            setRemainingSeconds(remainingSeconds => remainingSeconds - 1);
        } else {
            stopTimer();
        }
    }

    return (
        <Flex justify={'center'}>
            <Card radius={'md'} withBorder w={300}>
                <Card.Section>
                    <Title order={1} ta='center' m='sm'>{convertSecondsToString(remainingSeconds)}</Title>
                </Card.Section>
                <Card.Section>
                    <Flex justify={'center'}>
                        <Button m='sm' onClick={startTimer}>Start</Button>
                        <Button m='sm' onClick={stopTimer}>Stop</Button>
                    </Flex>
                </Card.Section>
            </Card>
        </Flex>
    );
}

export default Timer;