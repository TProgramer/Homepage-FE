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
  const sendCode = async () => {
    if (!isRequested) {
      setTextValue("...");
      setIsDisabled(true);
      const res = await fetch(
        "http://ec2-3-35-104-193.ap-northeast-2.compute.amazonaws.com:8000/auth/send-code",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
          }),
        }
      );
      setIsDisabled(false);
      setTextValue("Send Verify Code");
      if (res.ok) {
        alert("Email send");
        setIsRequested(true);
      } else {
        alert("Failed");
      }
    }
  };
  useEffect(() => {
    (async () => {
      if (code.length === 6) {
        const res = await fetch(
          "http://ec2-3-35-104-193.ap-northeast-2.compute.amazonaws.com:8000/auth/check-code",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${code}`,
            },
            body: JSON.stringify({
              code,
              email,
            }),
          }
        );
        if (res.ok) {
          const json = await res.json();
          const verifiedToken = json.disposable_access_token;
          setExpired(true);
          setStopTimer(true);
          setVerifiedToken(verifiedToken);
        } else {
          alert("🚨🚨🚨 잘못된 코드입니다 🚨🚨🚨");
          setCode("");
        }
      }
    })();
  }, [code]);
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
