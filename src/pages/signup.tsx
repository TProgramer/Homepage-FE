import { Form } from "../styles/layout/sign/globalSignBox";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { useForm } from "react-hook-form";
import { ISignType } from "../components/common/sign/SignLayout";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function SignUp() {
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ISignType>();
  const pwWatch = watch("password");
  const onSubmit = (data: ISignType) => {
    console.log(data);
  };

  const regexPw =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,15}$/; //최소길이 6, 1개이상 문자, 1개이상 특수문자
  const regexEmail =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)} show={show}>
        <input
          {...register("studentId", {
            required: true,
            minLength: 8,
          })}
          type="text"
          className="input"
          placeholder="Student Id"
        />
        <div className="pw">
          <input
            {...register("password", {
              required: true,
              pattern: regexPw,
            })}
            type={!show ? "password" : "text"}
            className="input"
            placeholder="최소길이 6, 1개이상 문자, 1개이상 특수문자"
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
          {errors.password?.type === "pattern" && (
            <span className="errorMessage">
              6~15 Length, 1 more than String and Special Character
            </span>
          )}
        </div>
        <div className="pw">
          <input
            {...register("passwordConfirm", {
              required: true,
              validate: (value) => value === pwWatch,
            })}
            type="password"
            className="input"
            placeholder="Password Confirm"
          />
          {errors.passwordConfirm?.type === "validate" && (
            <span className="errorMessage">
              It's not the same as the password
            </span>
          )}
        </div>
        <input
          {...register("birthDay", { required: true })}
          type="date"
          className="input"
        />
        <input
          {...register("email", {
            required: true,
            pattern: regexEmail,
          })}
          type="email"
          className="input"
          placeholder="Email address"
        />
        <input
          {...register("github", {
            required: true,
          })}
          type="text"
          className="input"
          placeholder="Github Id"
        />
        <button className="submit">CREATE ACCOUNT</button>
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
}
export default SignUp;
