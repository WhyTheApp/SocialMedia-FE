import BackgroundContainer from "@/components/background";
import {
  CenteredContainer,
  BlockOfTextContainer,
  NormalText,
  SoftTitle,
} from "./Terms.style";
import { TCText  } from "@/CONSTANTS/gdpr.constants";
import { AppTitle } from "@/CONSTANTS/ui.constants";

const Privacy = () => {
  return (
    <BackgroundContainer>
      <CenteredContainer>
        <SoftTitle>{AppTitle}</SoftTitle>

        <BlockOfTextContainer>
          <pre style={{ whiteSpace: "pre-wrap" }}>
            <NormalText>{TCText}</NormalText>
          </pre>
        </BlockOfTextContainer>
      </CenteredContainer>
    </BackgroundContainer>
  );
};

export default Privacy;
