import { Group, Flex, Text, TextInput, UnstyledButton } from "@mantine/core";
import { KeyboardEvent, useState } from "react";

export interface TimerProps {
    title: string,
    id?: number,
    initialTime?: number,
    handleDelete?: Function
}

const Timer = ({ title, id, handleDelete }: TimerProps) => {
    const [editable, setEditable] = useState(false);
    // need to update this to have state managed by timer page
    const [content, setContent] = useState(title);

    const handleKeyDown = (event:KeyboardEvent) => {
        if(event.key === 'Enter') {
            setEditable(!editable);
        }
    }

    return (
        <Flex
            sx={(theme) => ({
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                width: '300px',
                height: '100px',
                borderRadius: theme.radius.md
            })}
            my={'sm'}
        >
            <Flex
                direction='column'
                align='left'
                justify='center'
                maw={50}
                mx='md'
                ta='center'
                h='100%'
            >
                <Text size={40} lh={1}>
                    😄
                </Text>
                <Text size={14}>
                    5:00
                </Text>
            </Flex>
            <Flex
                direction='column'
                align='left'
                my='auto'
                gap='md'
            >
                {editable ?
                <TextInput
                    onDoubleClick={() => setEditable(!editable)}
                    autoFocus
                    onKeyDown={handleKeyDown}
                    value={content}
                    onChange={event => setContent(event.target.value)}
                    w={120}
                />
                :
                <Text
                    size={16}
                    fw='bold'
                    onDoubleClick={() => setEditable(!editable)}
                    w={120}
                >
                    {content}
                </Text>}
                <Group spacing={'sm'}>
                    <UnstyledButton
                        onClick={() => {
                            console.log('clicked')
                            handleDelete!!(id)
                        }}
                    >
                        <Text size={10}>Delete</Text>
                    </UnstyledButton>
                    <Text size={10}>Reset</Text>
                    <Text size={10}>Complete</Text>
                </Group>
            </Flex>
            <Text mt='auto' ml='lg' mb='lg' size={14}
                sx={(theme) => ({
                    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
                    borderRadius: theme.radius.md,
                    padding: "3px"
                })}
            >
                00:00
            </Text>
        </Flex>
    );
}

export default Timer;