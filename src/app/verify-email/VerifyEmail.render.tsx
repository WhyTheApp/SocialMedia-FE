import BackgroundContainer from "@/components/background";
import { LoginPageContainer } from "./VerifyEmail.style";
import TriangleGrid from "@/components/triangle-side";
import VerifyEmailCard from "@/components/authentication/email-verify-card";

const VerifyEmail = () => {
  return (
    <BackgroundContainer>
      <LoginPageContainer>
        <TriangleGrid />
        <VerifyEmailCard />
      </LoginPageContainer>
    </BackgroundContainer>
  );
};

export default VerifyEmail;
