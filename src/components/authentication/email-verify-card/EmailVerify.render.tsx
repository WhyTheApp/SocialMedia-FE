import {
  VERIFY_LIMIT_TEXT,
  VERIFY_MAIL_TEXT,
} from "@/CONSTANTS/login.constants";
import SimpleButton from "../../simple-button";
import {
  GreyText,
  CustomInput,
  LoginContainer,
  LoginTitle,
  StyledLogo,
  StyledToaster,
} from "../Authentication.style";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { getUserId } from "@/services/TokenManager";
import { verifyEmail } from "@/services/Authentication.service";

const VerifyEmail = () => {
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const userId = getUserId()!;

  return (
    <LoginContainer>
      <StyledToaster />
      <StyledLogo />
      <LoginTitle>Verify your account</LoginTitle>
      <CustomInput
        placeholder="Code"
        value={code}
        onChange={(e) => {
          setCode(e.target.value);
        }}
      />

      <SimpleButton
        onClick={() => {
          verifyEmail({ userId, code, isLoading, setIsLoading, router });
        }}
        disabled={code.length < 2}
        buttonText={VERIFY_MAIL_TEXT}
      />
      <GreyText>{VERIFY_LIMIT_TEXT}</GreyText>
    </LoginContainer>
  );
};

export default VerifyEmail;
