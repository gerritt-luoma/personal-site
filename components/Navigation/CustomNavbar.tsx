import NavbarLinks from './NavbarLinks'
import { Navbar } from '@mantine/core';

interface CustomNavbarProps {
    opened: boolean
}

const CustomNavbar = ({ opened }: CustomNavbarProps) => {
    return (
        <Navbar width={{ sm: 200, lg: 300 }} height={'100%'} p='xs' hidden={!opened}>
            <Navbar.Section grow mt="xs">
                <NavbarLinks/>
            </Navbar.Section>
        </Navbar>
    );
}

export default CustomNavbar;