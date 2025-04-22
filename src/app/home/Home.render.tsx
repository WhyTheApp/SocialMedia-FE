import BackgroundContainer from "@/components/background";
import { CenteredContainer, SoftText, SoftTitle } from "./Home.style";
import SimpleButton from "@/components/simple-button";
import { AboutUsText, AppTitle, JoinText, ReadText } from "@/constants";
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
        <>
          <SimpleButton
            onClick={navigateToDetailsInput}
            buttonText={JoinText}
          ></SimpleButton>
          <SoftText>
            {ReadText}{" "}
            <a href="/about-us" target="_blank">
              {AboutUsText}
            </a>
          </SoftText>
        </>
      </CenteredContainer>
    </BackgroundContainer>
  );
};

export default Home;
