import BackgroundContainer from "@/components/background";
import { LoginPageContainer } from "./Register.style";
import TriangleGrid from "@/components/triangle-side";
import RegisterCard from "@/components/authentication/register-card";

const Register = () => {
  return (
    <BackgroundContainer>
      <LoginPageContainer>
        <TriangleGrid />
        <RegisterCard />
      </LoginPageContainer>
    </BackgroundContainer>
  );
};

export default Register;
