import { Form } from "../styles/layout/sign/globalSignBox";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { useForm } from "react-hook-form";
import { ISignType } from "../components/common/sign/SignLayout";

function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ISignType>();
  const onSubmit = (data: ISignType) => {
    console.log(data);
  };
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("studentId", { required: true })}
          type="text"
          className="input"
          placeholder="Student Id"
        />
        <input
          {...register("password", { required: true })}
          type="text"
          className="input"
          placeholder="Password"
        />
        <input
          {...register("passwordConfirm", {
            required: true,
            minLength: 8,
            maxLength: 15,
          })}
          type="text"
          className="input"
          placeholder="Password Confirm"
        />
        <input
          {...register("birthDay", { required: true })}
          type="date"
          className="input"
        />
        <input
          {...register("email", { required: true })}
          type="email"
          className="input"
          placeholder="Email address"
        />
        <input
          {...register("github", { required: true })}
          type="url"
          className="input"
          placeholder="Github address"
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
