import { IconPlayerPlay, IconPlayerPause } from "@tabler/icons";
import { ActionIcon, useMantineTheme } from "@mantine/core";

interface PlayPauseButtonProps {
    running: boolean
    onClick: Function
}

const PlayPauseButton = ({ running, onClick }: PlayPauseButtonProps) => {
    const theme = useMantineTheme();
    const Icon = running ? IconPlayerPause : IconPlayerPlay;
    return(
        <ActionIcon onClick={() => onClick()} variant='filled' radius='xl' size={55} bg={theme.colorScheme === 'dark' ? 'dark.3' : 'black'}>
            <Icon size={30}/>
        </ActionIcon>
    )
}

export default PlayPauseButton;