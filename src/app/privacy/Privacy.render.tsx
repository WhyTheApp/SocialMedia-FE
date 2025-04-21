import BackgroundContainer from "@/components/background";
import {
  CenteredContainer,
  BlockOfTextContainer,
  NormalText,
  SoftTitle,
} from "./Privacy.style";
import { AppTitle, GDPRText } from "@/constants";

const Privacy = () => {
  return (
    <BackgroundContainer>
      <CenteredContainer>
        <SoftTitle>{AppTitle}</SoftTitle>

        <BlockOfTextContainer>
          <pre style={{ whiteSpace: "pre-wrap" }}>
            <NormalText>{GDPRText}</NormalText>
          </pre>
        </BlockOfTextContainer>
      </CenteredContainer>
    </BackgroundContainer>
  );
};

export default Privacy;
