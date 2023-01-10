import { useState } from "react";
import { Title, Button, Group, Flex, Card } from "@mantine/core";

const Timer = () => {
    const [remainingSeconds, setRemainingSeconds] = useState(300);
    const [intervalID, setIntervalID] = useState(0);

    const startTimer = () => {
        if(!intervalID) {
            setIntervalID(window.setInterval(() => {
                setRemainingSeconds(seconds => seconds - 1);
                displayTime(remainingSeconds);
            }, 1000))
        }
    }

    const stopTimer = () => {
        if(intervalID) {
            window.clearInterval(intervalID);
            setIntervalID(0);
        }
    }

    const displayTime = (numSeconds: number) => {
    }

    return (
        <Flex justify={'center'}>
            <Card radius={'md'} withBorder w={300}>
                <Card.Section>
                    <Title order={1} ta='center' m='sm'>{remainingSeconds}</Title>
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