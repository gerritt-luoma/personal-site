import { Text, UnstyledButton } from "@mantine/core";

interface ChangeTimeProps {
    text: string,
    onClick: Function
}
const ChangeTime = ({ text, onClick }: ChangeTimeProps) => {
    return (
        <UnstyledButton onClick={() => onClick()}>
            <Text size={24} display='flex' align='center' weight={'bold'} p='sm'>
                {text}
            </Text>
        </UnstyledButton>
    )
}

export default ChangeTime;