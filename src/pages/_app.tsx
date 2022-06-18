import type { AppProps } from "next/app";
import Head from "next/head";
import reset from "../styles/global/Global";
import { Global, css, ThemeProvider } from "@emotion/react";
import { theme } from "../themes/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>boilerplate</title>
      </Head>
      <Global
        styles={css`
          ${reset}
        `}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
