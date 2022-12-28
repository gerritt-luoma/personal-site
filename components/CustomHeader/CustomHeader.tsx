import { Group, Header, ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconSun, IconMoonStars, IconHome2, IconBrandGithub } from "@tabler/icons";
import ActiveLink from "./ActiveLink";
import SignInButton from "@components/Auth/SignInButton";
import Link from "next/link";

const CustomHeader = () => {
    const { colorScheme, toggleColorScheme} = useMantineColorScheme();
    return (
        <Header height={60} fixed={false}>
            <Group sx={{ height: '100%' }} px={20} position="apart" >
                <ActionIcon variant="default" component={Link} href="/" size={'lg'}>
                    <IconHome2 size={20}/>
                </ActionIcon>
                <Group sx={{ width: 400}} position="apart">
                    <ActiveLink href='/resume' text='Resume'/>
                    <ActiveLink href='/blog' text='Blog'/>
                    <ActiveLink href='/projects' text='Projects'/>
                </Group>
                <Group>
                    <ActionIcon variant="default" component="a" href="https://github.com/gerritt-luoma/personal-site">
                        <IconBrandGithub size={20}/>
                    </ActionIcon>
                    <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={'lg'}>
                        { colorScheme === 'light' ? <IconMoonStars size={20} /> : <IconSun size={20}/> }
                    </ActionIcon>
                    <SignInButton />
                </Group>
            </Group>
        </Header>
    )
}

export default CustomHeader;