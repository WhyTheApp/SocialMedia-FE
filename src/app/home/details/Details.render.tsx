import {
  BottomText,
  CenteredContainer,
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
import {
  AgreeText,
  EmailPlaceholder,
  JoinText,
  LargeContainerPlaceholder,
  PrivacyPolicyText,
} from "@/CONSTANTS/ui.constants";
import { Title } from "@/components/title";
import SimpleButton from "@/components/simple-button";

const Details = () => {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [checked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleFeedbackChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFeedback(event.target.value);
  };

  const handlePageChange = () => {
    router.push("/home/thank-you");
  };

  const navigateToPrivacy = () => {
    router.push("/privacy");
  };

  const sendEmail = async () => {
    if(loading)
      return;

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

  return (
    <CenteredContainer>
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
            <ColoredLink onClick={navigateToPrivacy}>
              {PrivacyPolicyText}
            </ColoredLink>
          </BottomText>
          .
        </StyledLabel>

        <SimpleButton onClick={sendEmail} buttonText={JoinText} />
      </InputInner>
    </CenteredContainer>
  );
};

export default Details;
