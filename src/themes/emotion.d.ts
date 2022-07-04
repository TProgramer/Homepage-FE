import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    textColor: {
      primary: string;
      sub: string;
    };
    buttonColor: {
      primary: string;
      onHover: string;
    };
    validation: {
      resolve: string;
      error: string;
    };
    accentColor: string;
    backgroundColor: string;
  }
}
