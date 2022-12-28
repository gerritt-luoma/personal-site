import { Button } from "@mantine/core";
import { useSession, signIn, signOut } from 'next-auth/react';

const SignInButton = () => {
    const { status } = useSession();
    if( status === 'authenticated' ) {
        return (
            <Button onClick={() => signOut()}>
                Sign Out
            </Button>
        )
    }

    return (
        <Button onClick={() => signIn()} color={'pink.6'}>
            Sign In
        </Button>
    )
}

export default SignInButton;