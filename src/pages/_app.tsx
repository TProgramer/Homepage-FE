import type { AppProps } from "next/app";
import Head from "next/head";
import reset from "../styles/global/Global";
import { Global, css, ThemeProvider } from "@emotion/react";
import { theme } from "../themes/theme";
import Layout from "../components/common/Layout";
import { useRouter } from "next/router";
import SignLayout from "../components/common/SignLayout";
import { TokenWrapper } from "../context/tokenState";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const route = useRouter().pathname;
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>boilerplate</title>
      </Head>
      <Global
        styles={css`
          ${reset}
        `}
      />

      <TokenWrapper>
        {route === "/calendar" ? (
          <Component {...pageProps} />
        ) : route === "/signin" || route === "/signup" ? (
          <SignLayout>
            <ThemeProvider theme={theme}>
              <Component {...pageProps} />
            </ThemeProvider>
          </SignLayout>
        ) : (
          <Layout>
            <ThemeProvider theme={theme}>
              <Component {...pageProps} />
            </ThemeProvider>
          </Layout>
        )}
      </TokenWrapper>
    </>
  );
}
