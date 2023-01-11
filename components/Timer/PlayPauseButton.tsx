import { IconPlayerPlay, IconPlayerPause } from "@tabler/icons";
import { ActionIcon } from "@mantine/core";

interface PlayPauseButtonProps {
    running: boolean
    onClick: Function
}

const PlayPauseButton = ({ running, onClick }: PlayPauseButtonProps) => {
    const Icon = running ? IconPlayerPause : IconPlayerPlay;
    return(
        <ActionIcon onClick={() => onClick()} variant='default' radius='xl' size={'xl'}>
            <Icon size={25}/>
        </ActionIcon>
    )
}

export default PlayPauseButton;