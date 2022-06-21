import { useState } from "react";
import { Form } from "../styles/layout/sign/globalSignBox";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { ISignType } from "../components/common/sign/SignLayout";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function SignIn() {
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignType>();
  const onSubmit = (data: ISignType) => console.log(data);
  return (
    <Form onSubmit={handleSubmit(onSubmit)} show={show}>
      <input
        {...register("studentId", { required: true })}
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
