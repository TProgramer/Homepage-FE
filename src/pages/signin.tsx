import { useState } from "react";
import { Form } from "../styles/layout/sign/globalSignBox";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { SignType } from "../components/signup/SignUp";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useRouter } from "next/router";
import { useTokenContext } from "../context/tokenState";
import useFetch from "../hooks/useFetch";

interface LoginDto {
  access_token: string;
  refresh_token: string;
}

function SignIn() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const { register, handleSubmit } = useForm<SignType>();
  const { setToken } = useTokenContext();
  const { post } = useFetch(
    "http://ec2-3-35-104-193.ap-northeast-2.compute.amazonaws.com:8000"
  );

  const onSubmit = async (data: SignType) => {
    const { access_token, refresh_token, error } = await post<LoginDto>(
      "/auth/login",
      data
    );
    if (error) {
      alert("로그인실패");
    } else {
      setToken(access_token, refresh_token);
      alert("로그인성공");
      router.push("/");
    }
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)} show={show}>
      <input
        {...register("student_id", { required: true })}
        type="text"
        className="input"
        placeholder="Student ID"
      />
      <div className="pwVisible">
        <input
          {...register("password", { required: true })}
          type={!show ? "password" : "text"}
          className="input"
          placeholder="Password"
        />
        {!show ? (
          <VisibilityIcon
            className="visibleIcon"
            onClick={() => setShow((prev) => !prev)}
          />
        ) : (
          <VisibilityOffIcon
            className="visibleIcon"
            onClick={() => setShow((prev) => !prev)}
          />
        )}
      </div>
      <button className="submit">LOG IN</button>
      <p className="toregister">
        <Link href="/signup">
          <a>CREATE ACOUNT</a>
        </Link>
      </p>
    </Form>
  );
}
export default SignIn;
