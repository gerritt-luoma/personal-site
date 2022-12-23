import { useRouter } from "next/router";
import Link from "next/link";
import { Button } from "@mantine/core";

interface ActiveLinkProps {
    href: string,
    text: string
}

const ActiveLink = ( { href, text }: ActiveLinkProps) => {
    const router = useRouter();
    const isActive = router.asPath === href;
    return (
        <Button component={Link} href={href} variant={isActive ? 'filled' : 'default'} color={isActive ? 'pink.6' : 'default'}>
            {text}
        </Button>
    )
}

export default ActiveLink;