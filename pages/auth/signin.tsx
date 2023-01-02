import { Box, TextInput, Button, Flex, Group, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { getCsrfToken, signIn } from 'next-auth/react';
import { GetServerSidePropsContext } from "next";

interface SignInProps {
    csrfToken: string | undefined
}

const SignInPage = ({ csrfToken }: SignInProps) => {
    const form = useForm({
        initialValues: {
            email: '',
            confirmEmail: '',
        },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            confirmEmail: (value, values) => value !== values.email ? 'Emails did not match' : null,
        }
    });

    return (
        <Flex align={'center'} justify={'center'} direction='column'>
            <Box sx={(theme) => ({
                minWidth: 300,
                borderRadius: 10,
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[2],
                padding: theme.spacing.md
            })}
            >
                <Title order={3}>Sign up with Email!</Title>
                <form onSubmit={form.onSubmit((values) => signIn('email', { 'email': values.email}))}>
                    <TextInput
                        withAsterisk
                        label='Email'
                        type='email'
                        placeholder="your@email.com"
                        m={'sm'}
                        {...form.getInputProps('email')}
                    />
                    <TextInput
                        withAsterisk
                        label='Confirm your email'
                        placeholder="your@email.com"
                        m={'sm'}
                        {...form.getInputProps('confirmEmail')}
                    />

                    <Group position="right" mt='md' mr='md'>
                        <Button type="submit">Submit</Button>
                    </Group>
                </form>
            </Box>
        </Flex>
    );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const csrfToken = await getCsrfToken(context);
    return {
        props: {
            csrfToken,
        }
    }
}

export default SignInPage;