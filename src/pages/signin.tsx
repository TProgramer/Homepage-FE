import { useState } from "react";
import { Form } from "../styles/layout/sign/globalSignBox";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { SignType } from "../components/signup/SignUp";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useRouter } from "next/router";
import { useTokenContext } from "../context/tokenState";

function SignIn() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const { register, handleSubmit } = useForm<SignType>();
  const { setAccessToken } = useTokenContext();

  const onSubmit = async (data: SignType) => {
    const res = await fetch(
      "http://ec2-3-35-104-193.ap-northeast-2.compute.amazonaws.com:8000/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    if (res.ok) {
      const json = await res.json();
      const { access_token, refresh_token } = json;
      setAccessToken(access_token);
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("refresh_token", refresh_token);
      alert("로그인성공");
      router.push("/");
    } else {
      alert("로그인실패");
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
