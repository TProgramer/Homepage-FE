import React from "react";
import {
  SignBox,
  SignContainer,
} from "../../../styles/layout/sign/globalSignBox";

const SignLayout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <SignContainer>
      <SignBox>
        <div className="innerContainer">
          <h1 className="logo">NL</h1>
          {children}
        </div>
      </SignBox>
    </SignContainer>
  );
};

export default SignLayout;
