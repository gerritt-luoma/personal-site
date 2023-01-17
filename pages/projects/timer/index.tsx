import { Flex, Divider, UnstyledButton, Text } from "@mantine/core";
import Timer from "@components/Timer/Timer";
import Countdown from "@components/Timer/Countdown";
import { IconClock, IconPlus } from "@tabler/icons";
import { useState } from "react";
import { TimerProps } from "@components/Timer/Timer";

interface AddTimerProps {
    onClick: Function
}

const AddTimer = ({ onClick }: AddTimerProps) => {
    return (
        <UnstyledButton
            w={300}
            h={100}
            m='xs'
            sx={styles => ({
                borderStyle: 'dashed',
                borderWidth: '1px',
                borderRadius: styles.radius.md
            })}
            onClick={() => onClick()}
        >
            <Flex w='100%' h='100%' direction={'column'} align='center' justify='center'>
                <IconPlus size={14}/>
                <Text size={14} color='dimmed'>Add a task</Text>
            </Flex>
        </UnstyledButton>
    )
}

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

    const addTimer = () => {
        setTimers([...timers, { title: 'New Timer', initialTime: 1500}])
    }

    const removeTimer = (id: number) => {
        setTimers((current) => {
            return current.filter((timer, index) => {
                return index !== id
            })
        }
        );
    }


    return (
        <Flex justify={'center'} align='center' direction='column' mx='auto' maw={500} sx={styles => ({
            backgroundColor: styles.colorScheme === 'dark' ? styles.colors.dark[6] : styles.colors.gray[1]
        })}>
            <Countdown title='Test task' totalSeconds={1500}/>
            {
                timers.map((timer, index) => <Timer key={index} id={index} title={timer.title} initialTime={timer.initialTime} handleDelete={removeTimer}/>)
            }
            <Divider
                m='xs'
                variant='dashed'
                labelPosition="left"
                w='90%'
                label={
                    <IconClock size={12}/>
                }
            />
            <AddTimer onClick={addTimer}/>
        </Flex>
    );
}

export default TimerPage;