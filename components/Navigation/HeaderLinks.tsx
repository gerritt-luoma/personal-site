import { useRouter } from "next/router";
import { LinkProps, navLinks } from "./links";
import Link from "next/link";
import { Button } from "@mantine/core";

const HeaderLink = ({ link, label }: LinkProps) => {
    const router = useRouter();
    return (
        <Button component={Link} href={link} color="pink" variant={router.asPath === link ? 'filled' : 'subtle'}>
            {label}
        </Button>
    );
}

const HeaderLinks = () => {
    return (
        <>
            {navLinks.map(link => <HeaderLink link={link.link} label={link.label}/>)}
        </>
    );
}

export default HeaderLinks;