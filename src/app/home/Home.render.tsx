import BackgroundContainer from "@/components/background";
import { CenteredContainer, SoftTitle } from "./Home.style";
import SimpleButton from "@/components/simple-button";
import { AppTitle, JoinText } from "@/constants";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  const navigateToDetailsInput = () => {
    console.log("clicked");
    router.push("/details");
  };

  return (
    <BackgroundContainer>
      <CenteredContainer>
        <SoftTitle>{AppTitle}</SoftTitle>
        <SimpleButton
          onClick={navigateToDetailsInput}
          buttonText={JoinText}
        ></SimpleButton>
      </CenteredContainer>
    </BackgroundContainer>
  );
};

export default Home;
