import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { rtlCache } from 'rtl-cache';
import { SessionProvider } from 'next-auth/react';
import { useLocalStorage } from '@mantine/hooks';
import Navigation from '@components/Navigation/Navigation';
import "@styles/global.css"


export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const { session } = pageProps;
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'dark',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme ) => {
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  }

  return (
    <SessionProvider session={session}>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{colorScheme: colorScheme}}
          emotionCache={rtlCache}
        >
          <Navigation>
            <Component {...pageProps} />
          </Navigation>
        </MantineProvider>
      </ColorSchemeProvider>
    </SessionProvider>
  );
}
