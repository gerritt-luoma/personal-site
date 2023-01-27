import Link from "next/link";
import { Button, Text } from "@mantine/core";
import { useRouter } from "next/router";
import { LinkProps, navLinks } from "./links";


const NavbarLink = ({ icon, color, link, label }: LinkProps) => {
    const Icon = icon!!;
    const router = useRouter();
    return (
        <Button
            component={Link}
            href={link}
            variant={router.asPath === link ? 'filled' : 'subtle'}
            sx={styles => ({
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'
            })}
            color='pink'
        >
            <Icon size={16} color={color}/>
            <Text size={16} weight='bold' ml='md'>
                {label}
            </Text>
        </Button>
    )
}

const NavbarLinks = () => {
    return(
        <>
            {navLinks.map(link => <NavbarLink icon={link.icon} color={link.color} link={link.link} label={link.label}/>)}
        </>
    )
}

export default NavbarLinks;
