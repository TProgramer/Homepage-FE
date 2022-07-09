import { StyledVisibilityIcon } from "../../styles/layout/sign/globalSignBox";
import { StyledVisibilityOffIcon } from "../../styles/layout/sign/globalSignBox";
import {
  UseFormRegister,
  UseFormHandleSubmit,
  UseFormWatch,
} from "react-hook-form";
import { SignType } from "./SignUp";
import { useState } from "react";

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
  const [phonenum, setPhonenum] = useState<string>("");
  const onChange = (e: any) => {
    let value = e.target.value;
    setPhonenum(value);
    if (value.length === 10) {
      setPhonenum(value.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"));
    }
    if (value.length === 13) {
      setPhonenum(
        value.replace(/-/g, "").replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
      );
    }
  };
  return (
    <>
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
          placeholder="비밀번호: 길이 6~15, 1개이상 문자, 특수문자"
        />
        {!show ? (
          <StyledVisibilityIcon show={show} onClick={() => setShow(true)} />
        ) : (
          <StyledVisibilityOffIcon show={show} onClick={() => setShow(false)} />
        )}
      </div>
      <input
        {...register("password_confirm", {
          required: true,
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
      <label htmlFor="birthday" className="labelBirth">
        생일
        <input
          {...register("birthday", { required: true })}
          type="date"
          className="inputBirth"
          id="birthday"
          name="birthday"
          min="1900-01-01"
          max="2099-12-31"
        />{" "}
      </label>

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
        onChange={onChange}
        value={phonenum}
        placeholder="전화번호"
      />

      <button className="submit">계정생성</button>
    </>
  );
}
