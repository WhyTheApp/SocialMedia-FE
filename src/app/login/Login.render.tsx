import BackgroundContainer from "@/components/background";
import { LoginPageContainer } from "./Login.style";
import TriangleGrid from "@/components/triangle-side";
import LoginCard from "@/components/authentication/login-card";

const Login = () => {
  return (
    <BackgroundContainer>
      <LoginPageContainer>
        <TriangleGrid />
        <LoginCard />
      </LoginPageContainer>
    </BackgroundContainer>
  );
};

export default Login;
