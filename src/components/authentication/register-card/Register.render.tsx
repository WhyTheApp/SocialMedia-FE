import {
  REGISTER_BUTTON_TEXT,
  LOGIN_TEXT,
  EXISTING_ACCOUNT_TEXT,
} from "@/CONSTANTS/login.constants";
import SimpleButton from "../../simple-button";
import {
  GreyText,
  ColoredLink,
  CustomInput,
  CustomPasswordInput,
  LoginContainer,
  LoginDivider,
  LoginTitle,
  OauthSection,
  Consents,
  StyledLogo,
  StyledToaster,
} from "../Authentication.style";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { localRegister } from "@/services/Authentication.service";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [consentToTC, setConsentToTC] = useState(false);
  const [consentToPrivacy, setConsentToPrivacy] = useState(false);
  const router = useRouter();

  const navigateToPrivacy = () => {
    router.push("/privacy");
  };

  const navigateToTerms = () => {
    router.push("/terms");
  };

  const navigateToLogin = () => {
    router.push("/login");
  };

  return (
    <LoginContainer>
      <StyledToaster />
      <StyledLogo />
      <LoginTitle>Create an account</LoginTitle>
      <CustomInput
        placeholder="Username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <CustomInput
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <CustomPasswordInput
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Consents
        navigateToTerms={navigateToTerms}
        navigateToPrivacy={navigateToPrivacy}
        consentToTC={consentToTC}
        setConsentToTC={setConsentToTC}
        consentToPrivacy={consentToPrivacy}
        setConsentToPrivacy={setConsentToPrivacy}
      />
      <SimpleButton
        onClick={() => {
          localRegister({
            isLoading,
            setIsLoading,
            username,
            email,
            password,
            router,
          });
        }}
        disabled={!consentToPrivacy || !consentToTC || username.length < 3}
        buttonText={REGISTER_BUTTON_TEXT}
      />
      <LoginDivider />
      <OauthSection />
      <GreyText>
        {EXISTING_ACCOUNT_TEXT}
        <ColoredLink onClick={navigateToLogin}>{LOGIN_TEXT}</ColoredLink>
      </GreyText>
    </LoginContainer>
  );
};

export default Register;
