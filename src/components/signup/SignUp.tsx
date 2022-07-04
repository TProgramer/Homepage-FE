import { useState } from "react";
import { useForm } from "react-hook-form";
import { Form } from "../../styles/layout/sign/globalSignBox";
import SignUpForm from "./SignUpForm";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import VerifyEmailForm from "./VerifyEmailForm";
import { useRouter } from "next/router";
import { useTokenContext } from "../../context/tokenState";

export interface SignType {
  student_id: string;
  password: string;
  password_confirm: string;
  name: string;
  phone: string;
  birthday: string;
  email: string;
  github: string;
}

const SignUp = () => {
  const router = useRouter();
  const [verifiedToken, setVerifiedToken] = useState("");
  const [show, setShow] = useState(false);
  const { setAccessToken } = useTokenContext();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignType>();

  const onSubmit = async (data: SignType) => {
    const { password_confirm, ...dto } = data;
    const dtoWithImageUri = { image_uri: "", admin: true, ...dto };
    const res = await fetch(
      "http://ec2-3-35-104-193.ap-northeast-2.compute.amazonaws.com:8000/users",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${verifiedToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dtoWithImageUri),
      }
    );
    if (res.ok) {
      alert("회원가입 성공!");
      const { user, token } = await res.json();
      setAccessToken(token.access_token);
      localStorage.setItem("access_token", token.access_token);
      localStorage.setItem("refresh_token", token.refresh_token);
      router.push("/");
    } else {
      alert("오류가 발생했습니다.");
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)} show={show}>
        {verifiedToken ? (
          <SignUpForm
            register={register}
            watch={watch}
            show={show}
            setShow={setShow}
          />
        ) : (
          <VerifyEmailForm
            register={register}
            watch={watch}
            setVerifiedToken={setVerifiedToken}
          />
        )}
      </Form>
      <div className="warning">
        <WarningAmberIcon />
        <p className="paragraph">
          The authentication process is carried out by the administrator, so
          please write down your personal information properly
        </p>
      </div>
    </>
  );
};

export default SignUp;
