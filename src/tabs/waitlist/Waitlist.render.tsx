import BackgroundContainer from "@/components/background";
import { BottomText, ColoredLink } from "./Waitlist.style";
import SimpleButton from "@/components/simple-button";

import { useRouter } from "next/navigation";
import { TabProps } from "@/CONSTANTS/navigation.constants";
import {
  JoinUsTitle,
  JoinText,
  ReadChoiceFirstText,
  ReadChoiceSecondText,
  AboutUsText,
  RoadmapText,
} from "@/CONSTANTS/ui.constants";
import Background from "@/components/background";
import { Title } from "@/components/title";

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
    <Background>
      <Title>{JoinUsTitle}</Title>
      <SimpleButton
        onClick={navigateToDetailsInput}
        buttonText={JoinText}
      ></SimpleButton>
      <BottomText>
        {ReadChoiceFirstText} <ColoredLink>{AboutUsText}</ColoredLink> <br />
        {ReadChoiceSecondText} <ColoredLink>{RoadmapText}</ColoredLink>
      </BottomText>
    </Background>
  );

  return setTab ? (
    pageContent
  ) : (
    <BackgroundContainer>{pageContent}</BackgroundContainer>
  );
};

export default Waitlist;
