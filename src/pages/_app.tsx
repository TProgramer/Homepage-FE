import type { AppProps } from "next/app";
import Head from "next/head";
import reset from "../styles/global/Global";
import { Global, css, ThemeProvider } from "@emotion/react";
import { theme } from "../themes/theme";
import Layout from "../components/common/Layout";
//import { PathMatch, useMatch, useParams } from "react-router-dom";
import { useRouter } from "next/router";
import SignLayout from "../components/common/sign/SignLayout";
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
      {route === "/signin" || route === "/signup" ? (
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
    </>
  );
}
