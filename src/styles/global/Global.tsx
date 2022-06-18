import { css } from "@emotion/react";

export const TABLET_STANDARD = 1024; //반응형 픽셀기준
export const MOBILE_STANDARD = 768; //반응형 픽셀기준
export const DEFAULT_FONT = "Noto Sans";
export const DEFAULT_BORDERRADIUS = "20px";
export const MAX_WIDTH = "1200px";
export const FONTWEIGHT_NORMAL = 400;
export const FONTWEIGHT_BOLD = 700;
export const FONT_XXXL = "48px";
export const FONT_XXL = "36px";
export const FONT_XL = "24px";
export const FONT_L = "16px";
export const FONT_M = "12px";
export const FONT_S = "9px";

export const DEFAULT_BOXSHADOW = css`
  box-shadow: rgba(0, 0, 0, 0.13) 0px 5px 25px;
`;
export const HOVER_BUTTON = css`
  transition: all 0.1s linear;
  color: rgba(0, 0, 0, 0.3);
  &:hover {
    color: black;
  }
`;

const reset = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after {
    content: "";
    content: none;
  }
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default reset;
