import { useEffect, useState } from "react";
import {
  UseFormRegister,
  UseFormHandleSubmit,
  UseFormWatch,
} from "react-hook-form";
import ExpiredTimer from "./ExpiredTimer";
import { SignType } from "./SignUp";
import useFetch from "../../hooks/useFetch";
import { alignProperty } from "@mui/material/styles/cssUtils";

interface SignUpFormProps {
  register: UseFormRegister<SignType>;
  watch: UseFormWatch<SignType>;
  setVerifiedToken: (verified: string) => void;
}

export default function VerifyEmailForm({
  register,
  watch,
  setVerifiedToken,
}: SignUpFormProps) {
  const regexEmail =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [isRequested, setIsRequested] = useState(false);
  const [expired, setExpired] = useState(false);
  const [stopTimer, setStopTimer] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [textValue, setTextValue] = useState("Send Verify Code");
  const { post, data, loading, error } = useFetch(
    "http://ec2-3-35-104-193.ap-northeast-2.compute.amazonaws.com:8000"
  );

  const sendCode = async () => {
    if (!isRequested) {
      setTextValue("...");
      setIsDisabled(true);
      const { error } = await post<null>("/auth/send-code", { email });
      setIsDisabled(false);
      setTextValue("Send Verify Code");
      if (error) {
        alert("Failed");
      } else {
        alert("Email send");
        setIsRequested(true);
      }
    }
  };

  useEffect(() => {
    if (code.length === 6) {
      post("/auth/check-code", {
        code,
        email,
      });
    }
  }, [code.length === 6]);

  useEffect(() => {
    if (loading === false && code.length === 6) {
      if (error) {
        setCode("");
        alert("🚨🚨🚨 잘못된 코드입니다 🚨🚨🚨");
      } else {
        const { disposable_access_token: verifiedToken } = data;
        setExpired(true);
        setStopTimer(true);
        setVerifiedToken(verifiedToken);
      }
    }
  }, [loading]);

  return (
    <>
      <span className="step">Step 1. 이메일 인증</span>
      <input
        {...register("email", {
          required: true,
          pattern: regexEmail,
        })}
        type="email"
        className="input"
        placeholder="이메일 주소"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.currentTarget.value)
        }
      />
      {isRequested && (
        <input
          type="text"
          className="input code"
          placeholder={!isRequested ? "" : "인증코드"}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCode(e.currentTarget.value)
          }
        />
      )}
      {!isRequested && (
        <input
          type="button"
          className="submit"
          onClick={sendCode}
          value={textValue}
          disabled={isDisabled}
        />
      )}

      {isRequested && (
        <ExpiredTimer
          expired={expired}
          expiredTime={60 * 3}
          stopTimer={stopTimer}
          setIsRequested={setIsRequested}
        />
      )}
    </>
  );
}
