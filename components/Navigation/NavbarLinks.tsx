import { ReactNode } from "react";
import { IconBrandGithub, IconHome, IconArticle, IconBulb } from "@tabler/icons";
import Link from "next/link";
import { UnstyledButton, ThemeIcon, Group, Text } from "@mantine/core";
import { useRouter } from "next/router";

interface MainLinkProps {
    icon: ReactNode,
    color: string,
    link: string,
    label: string
}

const MainLink = ({ icon, color, link, label }: MainLinkProps) => {
    const router = useRouter();
    return (
        <UnstyledButton
            component={Link}
            href={link}
            sx={(theme) => ({
                display: 'block',
                width: '100%',
                padding: theme.spacing.sm,
                borderRadius: theme.radius.sm,
                color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
                backgroundColor: router.asPath === link ? theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0] : '',

                '&:hover': {
                    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6]: theme.colors.gray[0]
                }
            })}
            mb={'xs'}
        >
            <Group>
                <ThemeIcon color={color}>
                    {icon}
                </ThemeIcon>

                <Text>{label}</Text>
            </Group>
        </UnstyledButton>
    );
}

const data = [
    { icon: <IconHome size={16} />, color: 'pink', link: '/', label: 'Home' },
    { icon: <IconArticle size={16} />, color: 'pink', link: '/blog', label: 'Blog' },
    { icon: <IconBulb size={16} />, color: 'pink', link: '/projects', label: 'Projects' },
    { icon: <IconBrandGithub size={16} />, color: 'pink', link: 'https://github.com/gerritt-luoma/personal-site', label: 'Repository' },
]

const NavbarLinks = () => {
    const links = data.map(link => <MainLink {...link} key={link.label}/>);
    return <>{links}</>
}

export default NavbarLinks;
