import type { AppProps } from "next/app";
import Head from "next/head";
import reset from "../styles/global/Global";
import { Global, css, ThemeProvider } from "@emotion/react";
import { theme } from "../themes/theme";
import Layout from "../components/common/Layout";
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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
