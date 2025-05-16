import BackgroundContainer from "@/components/background";
import {
  BottomText,
  ColoredLink,
  CustomInput,
  CustomLargeInput,
  InputInner,
  StyledCheckbox,
  StyledLabel,
} from "./Details.style";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { TabProps } from "@/CONSTANTS/navigation.constants";
import {
  AgreeText,
  EmailPlaceholder,
  JoinText,
  LargeContainerPlaceholder,
  PrivacyPolicyText,
} from "@/CONSTANTS/ui.constants";
import Background from "@/components/background";
import { Title } from "@/components/title";
import SimpleButton from "@/components/simple-button";

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
    <Background>
      <InputInner>
        <Title>Join us today!</Title>
        <CustomInput
          onChange={handleEmailChange}
          value={email}
          placeholder={EmailPlaceholder}
        />
        <CustomLargeInput
          onChange={handleFeedbackChange}
          value={feedback}
          placeholder={LargeContainerPlaceholder}
        />
        <StyledLabel>
          <StyledCheckbox
            id="consent"
            checked={checked}
            onChange={(e) => setIsChecked(e.target.checked)}
            required
          />
          <BottomText>
            {AgreeText}{" "}
            <ColoredLink href="/privacy" target="_blank">
              {PrivacyPolicyText}
            </ColoredLink>
          </BottomText>
          .
        </StyledLabel>

        <SimpleButton onClick={sendEmail} buttonText={JoinText} />
      </InputInner>
    </Background>
  );

  return setTab ? (
    pageContent
  ) : (
    <BackgroundContainer>{pageContent}</BackgroundContainer>
  );
};

export default Details;
