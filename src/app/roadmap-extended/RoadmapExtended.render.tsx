import BackgroundContainer from "@/components/background";
import {
  CenteredContainer,
  BlockOfTextContainer,
  NormalText,
  SoftTitle,
} from "./RoadmapExtended.style";
import { AppTitle } from "@/CONSTANTS/ui.constants";
import { RoadmapExtendedText } from "@/CONSTANTS/roadmap.constants";

const Privacy = () => {
  return (
    <BackgroundContainer>
      <CenteredContainer>
        <SoftTitle>{AppTitle}</SoftTitle>

        <BlockOfTextContainer>
          <pre style={{ whiteSpace: "pre-wrap" }}>
            <NormalText>{RoadmapExtendedText}</NormalText>
          </pre>
        </BlockOfTextContainer>
      </CenteredContainer>
    </BackgroundContainer>
  );
};

export default Privacy;
