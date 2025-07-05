import {
  BottomText,
  CenteredContainer,
  ColoredLink,
  CustomInput,
  CustomLargeInput,
  InputInner,
  StyledCheckbox,
  StyledLabel,
} from "./Waitlist.style";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  AgreeText,
  EmailPlaceholder,
  JoinText,
  LargeContainerPlaceholder,
  PrivacyPolicyText,
  WaitlistHeader,
} from "@/CONSTANTS/ui.constants";
import { Title } from "@/components/title";
import SimpleButton from "@/components/simple-button";
import PageContainer from "@/components/page-container/PageContainer.style";
import { PageHeader } from "@/components/page-header";
import api from "@/services/Requests.service";

const Waitlist = () => {
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
    if (loading) return;

    if (!checked) return;
    if (email.length < 3) return;
    setLoading(true);

    const url = process.env.NEXT_PUBLIC_API_URL + "registers/add";

    const data = {
      email: email,
      feedback: feedback,
    };

    try {
      await api.post(url, data).then((response) => {
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
    <PageContainer>
      <PageHeader>{WaitlistHeader}</PageHeader>
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
    </PageContainer>
  );
};

export default Waitlist;
