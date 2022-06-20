import React from "react";
import {
  SignBox,
  SignContainer,
} from "../../../styles/layout/sign/globalSignBox";

export interface ISignType {
  studentId: string;
  password: string;
  passwordConfirm?: string;
  birthDay?: string;
  email?: string;
  github?: string;
}

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
