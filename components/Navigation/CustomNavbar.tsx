import NavbarLinks from './NavbarLinks'
import { Navbar, Transition } from '@mantine/core';

interface CustomNavbarProps {
    opened: boolean
}

const CustomNavbar = ({ opened }: CustomNavbarProps) => {
    return (
        <Transition mounted={opened} transition='pop-top-right' duration={400} timingFunction='ease'>
            {(styles) => (
                <Navbar width={{ sm: 200, lg: 300 }} height={'100%'} p='xs' hidden={!opened} style={styles}>
                    <Navbar.Section grow mt="xs">
                        <NavbarLinks/>
                    </Navbar.Section>
                </Navbar>

            )}
        </Transition>
    );
}

export default CustomNavbar;
