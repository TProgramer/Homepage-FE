import { useState } from "react";
import { useForm } from "react-hook-form";
import { Form } from "../../styles/layout/sign/globalSignBox";
import SignUpForm from "./SignUpForm";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import VerifyEmailForm from "./VerifyEmailForm";
import { useRouter } from "next/router";
import { useTokenContext } from "../../context/TokenState";
import useFetch from "../../hooks/useFetch";

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

interface CreateUserReturnDto {
  access_token: string;
  refresh_token: string;
}

const SignUp = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const { accessToken, setTokens } = useTokenContext();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignType>();
  const { post } = useFetch(
    "http://ec2-3-35-104-193.ap-northeast-2.compute.amazonaws.com:8000"
  );

  const onSubmit = async (data: SignType) => {
    const { password_confirm, ...formData } = data;
    const formDataWithImageUri = {
      image_uri:
        "https://w.namu.la/s/426bf4c3324155e1b82e0e046c4e61042676dc0fd5fd75cb78897be9bd4175637a5c9613642fde68a30929743919cd17c121bbb40a61245667c9a4b14c53cb0da144e87c6a24a730463570f010ed578045eebe6d522a97ba8852128209a57d9bdf3c25fc4797d128772fed2a175ee778",
      admin: true,
      ...formData,
    };
    const { access_token, refresh_token, error } =
      await post<CreateUserReturnDto>("/users", formDataWithImageUri);
    console.log(formDataWithImageUri);
    if (error) {
      alert("오류가 발생했습니다.");
    } else {
      setTokens({ accessToken: access_token, refreshToken: refresh_token });
      alert("회원가입 성공!");
      router.push("/");
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)} show={show}>
        {accessToken ? (
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
            setVerifiedToken={(verifiedToken) =>
              setTokens({ accessToken: verifiedToken, refreshToken: null })
            }
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
