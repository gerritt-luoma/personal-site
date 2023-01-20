import { Flex } from "@mantine/core";
import Countdown from "@components/Timer/Countdown";


const TimerPage = () => {

    return (
        <Flex justify={'center'} align='center' direction='column' mx='auto' maw={500} sx={styles => ({
            backgroundColor: styles.colorScheme === 'dark' ? styles.colors.dark[6] : styles.colors.gray[1]
        })}>
            <Countdown/>
        </Flex>
    );
}

export default TimerPage;