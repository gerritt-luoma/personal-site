import { useRouter } from "next/router";
import Link from "next/link";
import { Button } from "@mantine/core";

interface ActiveLinkProps {
    href: string,
    text: string
}

const ActiveLink = ( { href, text }: ActiveLinkProps) => {
    const router = useRouter();
    return (
        <Button component={Link} href={href} variant={router.asPath === href ? 'filled' : 'default'}>
            {text}
        </Button>
    )
}

export default ActiveLink;