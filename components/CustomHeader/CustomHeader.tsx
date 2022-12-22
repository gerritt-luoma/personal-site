import { Group, Header, ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconSun, IconMoonStars, IconHome2 } from "@tabler/icons";
import ActiveLink from "./ActiveLink";
import Link from "next/link";

const CustomHeader = () => {
    const { colorScheme, toggleColorScheme} = useMantineColorScheme();
    return (
        <Header height={60}>
            <Group sx={{ height: '100%' }} px={20} position="apart" >
                <ActionIcon component={Link} href="/" size={'md'}>
                    <IconHome2 size={16}/>
                </ActionIcon>
                <Group sx={{ width: 400}} position="apart">
                    <ActiveLink href='/resume' text='Resume'/>
                    <ActiveLink href='/blog' text='Blog'/>
                    <ActiveLink href='/projects' text='Projects'/>
                </Group>
                <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={'md'}>
                    { colorScheme === 'light' ? <IconMoonStars size={16} /> : <IconSun size={16}/> }
                </ActionIcon>
            </Group>
        </Header>
    )
}

export default CustomHeader;