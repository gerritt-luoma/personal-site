import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider, AppShell, Header } from '@mantine/core';
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