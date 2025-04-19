import BackgroundContainer from "@/components/background";
import { CenteredContainer, SoftTitle } from "./Home.style";
import SimpleButton from "@/components/simple-button";
import { AppTitle, JoinText } from "@/constants";

const Home = () => {
  return (
    <BackgroundContainer>
      <CenteredContainer>
        <SoftTitle>{AppTitle}</SoftTitle>
        <SimpleButton onClick={() => {}} buttonText={JoinText}></SimpleButton>
      </CenteredContainer>
    </BackgroundContainer>
  );
};

export default Home;
