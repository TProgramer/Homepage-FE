import React from "react";
import {
  SignBox,
  SignContainer,
} from "../../../styles/layout/sign/globalSignBox";

const SignLayout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <SignContainer>
      <SignBox>
        <h1 className="logo">NL</h1>
        {children}
      </SignBox>
    </SignContainer>
  );
};

export default SignLayout;
