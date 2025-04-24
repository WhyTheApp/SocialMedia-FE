import BackgroundContainer from "@/components/background";
import { CenteredContainer, SoftText, SoftTitle } from "./Waitlist.style";
import SimpleButton from "@/components/simple-button";
import {
  AboutUsText,
  AppTitle,
  JoinText,
  ReadText,
  TabProps,
} from "@/constants";
import { useRouter } from "next/navigation";

const Waitlist = ({ setTab }: TabProps) => {
  const router = useRouter();

  const navigateToDetailsInput = () => {
    if (setTab) {
      setTab("details");
    } else {
      router.push("/details");
    }
  };

  const pageContent = (
    <CenteredContainer>
      <SoftTitle>{AppTitle}</SoftTitle>
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
    </CenteredContainer>
  );

  return setTab ? (
    pageContent
  ) : (
    <BackgroundContainer>{pageContent}</BackgroundContainer>
  );
};

export default Waitlist;
