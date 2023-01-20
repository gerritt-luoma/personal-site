import { convertSecondsToString } from "@lib/timer/timerUtils";
import { Flex, Text, TextInput } from "@mantine/core";
import { useState, KeyboardEvent } from "react";
import ChangeTime from "./ChangeTime";
import PlayPauseButton from "./PlayPauseButton";

const Countdown = () => {
    // default to 10 minutes when loading the page
    const [remainingTime, setRemainingTime] = useState(600);
    const [intervalId, setIntervalId] = useState(0);
    const [running, setRunning] = useState(false);
    const [title, setTitle] = useState("Double click to change title!");
    const [editable, setEditable] = useState(false);

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
        if(0 < remainingTime) {
            setRemainingTime(rt => rt - 1);
        } else {
            stopTimer();
        }
    }

    // Add 5 minutes at a time
    const addTime = () => {
        setRemainingTime(rt => rt + 300);
    }

    // Remove 5 minutes at a time
    const reduceTime = () => {
        if(remainingTime > 300) {
            setRemainingTime(rt => rt - 300);
        } else {
            setRemainingTime(0);
        }
    }

    const handleKeyDown = (event:KeyboardEvent) => {
        if(event.key === 'Enter') {
            setEditable(!editable);
        }
    }


    return(
        <Flex direction={'column'} align='center' gap='sm' w={300} m='md'>
            <Text size={40} fw='bold' px='sm' w={200} ta='center' sx={styles => ({
                backgroundColor: styles.colorScheme === 'dark' ? styles.colors.dark[5] : styles.colors.gray[2],
                borderRadius: styles.radius.md
            })}>
                {convertSecondsToString(remainingTime)}
            </Text>
            {
            editable ?
                <TextInput
                    autoFocus
                    onKeyDown={handleKeyDown}
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                    w={120}
                /> :
                <Text
                    size={16}
                    fw='bold'
                    onDoubleClick={() => setEditable(!editable)}
                    w={200}
                    ta='center'
                    sx={styles => ({
                        backgroundColor: styles.colorScheme === 'dark' ? styles.colors.dark[5] : styles.colors.gray[2],
                        borderRadius: styles.radius.md
                    })}
                >
                    {title}
                </Text>
            }
            <Flex w={200} align='center' justify='center' gap='sm'>
                <ChangeTime onClick={reduceTime} text={'-5'}/>
                <PlayPauseButton running={running} onClick={running ? stopTimer : startTimer}/>
                <ChangeTime onClick={addTime} text={'+5'}/>
            </Flex>
        </Flex>
    )
}

export default Countdown;