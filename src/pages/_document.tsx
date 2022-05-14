import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@mui/styles";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <body>
          <Head></Head>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const materialSheets = new ServerStyleSheets();
  const originRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originRenderPage({
      enhanceApp: (App) => (props) =>
        materialSheets.collect(<App {...props} />),
    });
  const initialProps = await Document.getInitialProps(ctx);
  return {
    ...initialProps,
    styles: <>{initialProps.styles}</>,
  };
};

// _document를 작성할 때는 Document 클래스를 상속받는 클래스형 컴포넌트로만 작성해야만 하며,
// 렌더함수는 꼭 <Html>, <Head>, <Main>, <NextScript> 요소를 리턴해줘야 한다.

// _document에서 사용하는 <Head>태그는 next/head가 아닌 next/document모듈에서 불러와야
// 하고, _document의 <Head>태그에는 모든 문서에 공통적으로 적용될 내용(ex) charset,뷰포트 메타태그 등)
// 이 들어가야 한다.

// _document는 서버사이드에 관여하는 로직 또는 static한 로직을 추가하는데 사용한다.

// 서버에서 받아온 html, css와 클라이언트가 렌더링한 html,css가 다르면 next에서 waring을 띄운다.
// 그래서 서버단에서 mui를 지원함으로 서버와 클라이언트간 간극을 맞추기 위해 설정을 해줘야한다.
