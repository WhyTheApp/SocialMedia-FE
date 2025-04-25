import BackgroundContainer from "@/components/background";
import {
  BottomButton,
  BottomCutout,
  CenteredContainer,
  CustomInput,
  InputContainer,
  InputInner,
  InputWithTitle,
  NormalText,
  SoftTitle,
  StyledCheckbox,
  StyledLabel,
} from "./Details.style";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { TabProps } from "@/CONSTANTS/navigation.constants";
import {
  AgreeText,
  AppTitle,
  EmailText,
  FeedbackText,
  JoinText,
  PrivacyPolicyText,
  PromiseText,
} from "@/CONSTANTS/ui.constants";

const Details = ({ setTab }: TabProps) => {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [checked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleFeedbackChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFeedback(event.target.value);
  };

  const handlePageChange = () => {
    if (setTab) {
      setTab("thank-you");
    } else {
      router.push("/thank-you");
    }
  };

  const sendEmail = async () => {
    if (checked == false) return;
    if (email.length < 3) return;
    setLoading(true);

    const url = process.env.NEXT_PUBLIC_API_URL + "registers/add";
    console.log(url);

    const data = {
      email: email,
      feedback: feedback,
    };

    try {
      await axios.post(url, data).then((response) => {
        if (response.status === 200 || response.status === 201) {
          handlePageChange();
        } else {
          setLoading(false);
        }
      });
    } catch {
      setLoading(false);
    }
  };

  const pageContent = (
    <CenteredContainer>
      <SoftTitle>{AppTitle}</SoftTitle>
      <InputContainer>
        <InputInner>
          <InputWithTitle>
            <NormalText>{EmailText}</NormalText>
            <CustomInput onChange={handleEmailChange} value={email} />
          </InputWithTitle>
          <InputWithTitle>
            <NormalText>{FeedbackText}</NormalText>
            <CustomInput onChange={handleFeedbackChange} value={feedback} />
          </InputWithTitle>
          <StyledLabel>
            <StyledCheckbox
              id="consent"
              checked={checked}
              onChange={(e) => setIsChecked(e.target.checked)}
              required
            />
            {AgreeText}{" "}
            <a href="/privacy" target="_blank">
              {PrivacyPolicyText}
            </a>
            .
          </StyledLabel>
          <StyledLabel>{PromiseText}</StyledLabel>

          <BottomCutout />
          <BottomButton onClick={sendEmail} disabled={loading}>
            {JoinText}
          </BottomButton>
        </InputInner>
      </InputContainer>
    </CenteredContainer>
  );

  return setTab ? (
    pageContent
  ) : (
    <BackgroundContainer>{pageContent}</BackgroundContainer>
  );
};

export default Details;
