import { Header, Flex, ActionIcon, Group, MediaQuery, Burger, Button } from "@mantine/core";
import { IconAperture } from "@tabler/icons";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import HeaderLinks from "./HeaderLinks";

interface CustomHeaderProps {
    opened: boolean,
    setOpened: Function
}

const CustomHeader = ( { opened, setOpened }: CustomHeaderProps) => {
    return (
        <Header height={{ base: 50, md: 70 } } p="md">
            <Flex align={'center'} h={'100%'} justify='space-between'>
                <ActionIcon component={Link} href='/' size={'md'} variant='outline'>
                    <IconAperture size={'md'} height='100%' width={'100%'}/>
                </ActionIcon>

                <MediaQuery smallerThan={'sm'} styles={{ display: 'none' }}>
                    <Group>
                        <HeaderLinks/>
                    </Group>
                </MediaQuery>

                <Group>
                    <ThemeToggle/>
                    <MediaQuery largerThan={'sm'} styles={{ display: 'none'}}>
                        <Burger
                            opened={opened}
                            onClick={() => setOpened(!opened)}
                            size={'md'}
                            mr='sm'/>
                    </MediaQuery>
                </Group>

            </Flex>
        </Header>
    )

}

export default CustomHeader;
