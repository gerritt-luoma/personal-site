import { Flex, TextInput, Button, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";
import TimerCard, { TimerCardProps } from "@components/Timer/TimerActive";
import TimerMain from "@components/Timer/TimerMain";

const Timer = () => {
    const [items, setItems] = useState<TimerCardProps[]>([]);

    const form = useForm({
        initialValues: {
            title: '',
            numMinutes: '',
        },

        validate: {
            title: (value) => (
                (value.length < 30) && (value.length > 0) ? null : 'Titles must be less than 30 characters'
            ),
        },

        transformValues: (values) => ({
            totalSeconds: Number(values.numMinutes)*60 || 0,
            title: values.title || '',
        }),
    })
    return (
        <Flex justify={'center'} align='center' direction='column' mx='auto' bg='dark.7' maw={500}>
            {/*<Box  bg='dark.6' w={300} mx='auto' sx={{borderRadius:'20px'}}>
                <form
                    onSubmit={form.onSubmit((values) => {
                        const newArr = [...items, values]
                        setItems(newArr);
                        form.reset();
                    })}
                    style={{display: 'inline'}}
                >
                    <TextInput
                        label='Title'
                        placeholder="Title of task..."
                        m='sm'
                        miw={250}
                        {...form.getInputProps('title')}
                    />
                    <TextInput
                        label='Length'
                        placeholder="Length in minutes"
                        type={'number'}
                        m='sm'
                        {...form.getInputProps('numMinutes')}
                    />
                    <Button type='submit' m='sm'>
                        Add
                    </Button>
                </form>
            </Box>
                {items && items.map((item, index) => <TimerCard key={index} title={item.title} totalSeconds={item.totalSeconds}/>)} */}
            <TimerMain/>
        </Flex>
    );
}

export default Timer;