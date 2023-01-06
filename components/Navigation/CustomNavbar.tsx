import NavbarLinks from './NavbarLinks'
import { Navbar } from '@mantine/core';

const CustomNavbar = () => {
    return (
        <Navbar width={{ base: 300 }} height={500} p='xs'>
            <Navbar.Section grow mt="xs">
                <NavbarLinks/>
            </Navbar.Section>
        </Navbar>
    );
}

export default CustomNavbar;