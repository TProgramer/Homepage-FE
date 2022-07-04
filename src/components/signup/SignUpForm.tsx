import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import {
  UseFormRegister,
  UseFormHandleSubmit,
  UseFormWatch,
} from "react-hook-form";
import { SignType } from "./SignUp";

interface SignUpFormProps {
  register: UseFormRegister<SignType>;
  watch: UseFormWatch<SignType>;
  show: boolean;
  setShow: (value: boolean) => void;
}

export default function SignUpForm({
  register,
  watch,
  show,
  setShow,
}: SignUpFormProps) {
  const regexPw =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,15}$/; //길이 6~15, 1개이상 문자, 1개이상 특수문자
  return (
    <>
      <span className="step">Step 2. 회원가입 양식</span>
      <input
        {...register("student_id", {
          required: true,
          minLength: 8,
        })}
        type="text"
        className="input"
        placeholder="학번"
      />
      <div className="pwVisible">
        <input
          {...register("password", {
            required: true,
            pattern: regexPw,
          })}
          type={!show ? "password" : "text"}
          className="input"
          placeholder="비밀번호: 길이 6~15, 1개이상 문자, 1개이상 특수문자"
        />
        {!show ? (
          <VisibilityIcon
            className="visibleIcon"
            onClick={() => setShow(true)}
          />
        ) : (
          <VisibilityOffIcon
            className="visibleIcon"
            onClick={() => setShow(false)}
          />
        )}
      </div>
      <input
        {...register("password_confirm", {
          required: true,
          validate: (value) => value === watch("password"),
        })}
        type="password"
        className="input"
        placeholder="비밀번호 확인"
      />
      <input
        {...register("name", {
          required: true,
        })}
        type="text"
        className="input"
        placeholder="이름"
      />
      <input
        {...register("birthday", { required: true })}
        type="date"
        className="input"
      />
      <input
        {...register("github", {
          required: true,
        })}
        type="text"
        className="input"
        placeholder="깃허브 아이디"
      />
      <input
        {...register("phone", {
          required: true,
        })}
        type="text"
        className="input"
        placeholder="전화번호"
      />

      <button className="submit">계정생성</button>
    </>
  );
}
