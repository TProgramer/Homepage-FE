import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    textColor: {
      primary: string;
      sub: string;
    };
    backgroundColor: string;
    buttonColor: string;
    accentColor: string;
  }
}
