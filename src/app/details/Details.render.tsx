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
} from "./Details.style";
import { AppTitle, JoinText } from "@/constants";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Details = () => {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleFeedbackChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFeedback(event.target.value);
  };

  const sendEmail = async () => {
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
          <BottomCutout />
          <BottomButton onClick={sendEmail} disabled={loading}>
            {JoinText}
          </BottomButton>
          <InputWithTitle>
            <NormalText>Test</NormalText>
            <CustomInput onChange={handleEmailChange} value={email} />
          </InputWithTitle>
          <InputWithTitle>
            <NormalText>Test</NormalText>
            <CustomInput onChange={handleFeedbackChange} value={feedback} />
          </InputWithTitle>
        </InputContainer>
      </CenteredContainer>
    </BackgroundContainer>
  );
};

export default Details;
