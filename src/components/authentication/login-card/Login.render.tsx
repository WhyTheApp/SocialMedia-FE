import {
  LOGIN_BUTTON_TEXT,
  NO_ACCOUNT_TEXT,
  REGISTER_TEXT,
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
  RememberMe,
  StyledLogo,
  StyledToaster,
} from "../Authentication.style";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { localLogin } from "@/services/Authentication.service";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [keppLoggedIn, setKeepLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const navigateToRegister = () => {
    router.push("/register");
  };

  return (
    <LoginContainer>
      <StyledToaster />
      <StyledLogo />
      <LoginTitle>Login to your account</LoginTitle>
      <CustomInput
        placeholder="Email or username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <CustomPasswordInput
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <RememberMe
        checked={keppLoggedIn}
        onChange={(e) => {
          setKeepLoggedIn(e.target.checked);
        }}
      />
      <SimpleButton
        onClick={() => {
          localLogin({
            isLoading,
            setIsLoading,
            username,
            password,
            keppLoggedIn,
            router,
          });
        }}
        disabled={username.length < 3 || password.length < 3}
        buttonText={LOGIN_BUTTON_TEXT}
      />
      <LoginDivider />
      <OauthSection />
      <GreyText>
        {NO_ACCOUNT_TEXT}
        <ColoredLink onClick={navigateToRegister}>{REGISTER_TEXT}</ColoredLink>
      </GreyText>
    </LoginContainer>
  );
};

export default Login;
