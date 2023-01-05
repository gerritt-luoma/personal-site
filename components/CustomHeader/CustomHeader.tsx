import { useState } from 'react';
import { createStyles, Header, Container, Group, Burger, Paper, Transition, Flex, Button, ActionIcon } from '@mantine/core';
import { IconHome } from '@tabler/icons';
import Link from 'next/link';
import { useDisclosure } from '@mantine/hooks';
import { ThemeContext } from '@emotion/react';

const HEADER_HEIGHT = 60;


interface CustomHeaderProps {
    links: {
        link: string;
        label: string
    }[];
}


const CustomHeader = () => {
    const links = [
        {
            link: '/resume',
            label: 'Resume'
        },
        {
            link: '/blog',
            label: 'Blog'
        },
        {
            link: '/projects',
            label: 'Projects'
        },
    ];
    const [opened, { toggle, close }] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);
    const items = links.map((link) => (
        <Button
            key={link.label}
            component={Link}
            href={link.link}
            onClick={(event) => {
                event.preventDefault();
                setActive(link.link);
                close();
            }}
            color={link.link == active ? 'pink.6' : ''}
        >
            {link.label}
        </Button>
    ));

    return (
        <Header height={HEADER_HEIGHT} mb={'sm'}>
            <Flex direction={'row'} justify={'space-between'} align='center' h={'100%'}>
                <ActionIcon size={'md'} m={'sm'}>
                    <IconHome/>
                </ActionIcon>
                <Group spacing={5}>
                    {items}
                </Group>

                <Burger opened={opened} onClick={toggle} m={'sm'}/>

                <Transition transition="pop-top-right" duration={200} mounted={opened}>
                    {(styles) => (
                        <Paper style={styles} withBorder pos={'absolute'} top={HEADER_HEIGHT} left={0} right={0}>
                            {items}
                        </Paper>
                    )}
                </Transition>
            </Flex>
        </Header>
    );
}

            export default CustomHeader;