import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider, AppShell, Navbar, Header } from '@mantine/core';
import { rtlCache } from 'rtl-cache';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'dark',
        }}
        emotionCache={rtlCache}
      >
        <AppShell
          padding="md"
          navbar={<Navbar width={{ base: 300}} height={'100%'} fixed={false} position={{ top: 0, left: 0}}> <></></Navbar>}
          header={<Header height={60} p="xs"><></></Header>}
          styles={(theme) => ({
            main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0]},
          })}
        >
          <Component {...pageProps} />
        </AppShell>
      </MantineProvider>
    </>
  );
}