import BackgroundContainer from "@/components/background";
import { LoginPageContainer } from "./Login.style";
import TriangleGrid from "@/components/triangle-side";
import Login from "@/components/login";

const Privacy = () => {
  return (
    <BackgroundContainer>
      <LoginPageContainer>
        <TriangleGrid />
        <Login />
      </LoginPageContainer>
    </BackgroundContainer>
  );
};

export default Privacy;
