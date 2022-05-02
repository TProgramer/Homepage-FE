import type { AppProps } from "next/app";
import Head from "next/head";
import reset from "../styles/Global";
import { Global, css } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>boilerplate</title>
      </Head>
      <Global styles={css`
        ${reset}
      `} />
      <CssBaseline />
      <Component {...pageProps} />
    </>
  )
}
