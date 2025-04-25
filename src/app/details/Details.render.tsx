import BackgroundContainer from "@/components/background";
import {
  BottomButton,
  BottomCutout,
  CenteredContainer,
  CustomInput,
  InputContainer,
  InputWithTitle,
  NormalText,
  SoftTitle,
  StyledCheckbox,
} from "./Details.style";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import {
  AgreeText,
  AppTitle,
  EmailText,
  FeedbackText,
  JoinText,
  PrivacyPolicyText,
  PromiseText,
} from "@/CONSTANTS/ui.constants";

const Details = () => {
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
          router.push("/thank-you");
        } else {
          setLoading(false);
        }
      });
    } catch {
      setLoading(false);
    }
  };

  return (
    <BackgroundContainer>
      <CenteredContainer>
        <SoftTitle>{AppTitle}</SoftTitle>
        <InputContainer>
          <InputWithTitle>
            <NormalText>{EmailText}</NormalText>
            <CustomInput onChange={handleEmailChange} value={email} />
          </InputWithTitle>
          <InputWithTitle>
            <NormalText>{FeedbackText}</NormalText>
            <CustomInput onChange={handleFeedbackChange} value={feedback} />
          </InputWithTitle>
          <label>
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
          </label>
          <label>{PromiseText}</label>

          <BottomCutout />
          <BottomButton onClick={sendEmail} disabled={loading}>
            {JoinText}
          </BottomButton>
        </InputContainer>
      </CenteredContainer>
    </BackgroundContainer>
  );
};

export default Details;
