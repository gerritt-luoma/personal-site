import { Flex } from "@mantine/core";
import Timer from "@components/Timer/Timer";
import Countdown from "@components/Timer/Countdown";
import { IconClock } from "@tabler/icons";
import { SyntheticEvent, useState } from "react";
import { TimerProps } from "@components/Timer/Timer";

const TimerPage = () => {
    const [timers, setTimers] = useState<TimerProps[]>([
        {
            title: 'Create timer page',
            initialTime: 1500
        },
        {
            title: 'Edit timers',
            initialTime: 1000
        }
    ]);

    const removeTimer = (index: number) => {
        
    }
    return (
        <Flex justify={'center'} align='center' direction='column' mx='auto' bg='dark.7' maw={500}>
            <Countdown title='Test task' totalSeconds={1500}/>
            {
                timers.map(timer => <Timer title={timer.title} initialTime={timer.initialTime}/>)
            }
        </Flex>
    );
}

export default TimerPage;