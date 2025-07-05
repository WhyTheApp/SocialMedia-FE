import { useRouter } from "next/navigation";
import {
  ColumnsContainer,
  FooterContainer,
  ItemContainer,
  ItemText,
  ItemTitle,
} from "./Footer.style";

const Footer = () => {
  const router = useRouter();

  const navigateToBlueprint = () => {
    router.push("/home/articles");
  };

  const navigateToPrivacy = () => {
    router.push("/privacy");
  };

  const navigateToTerms = () => {
    router.push("/terms");
  };

  const navigateToRoadmap = () => {
    router.push("/home/roadmap");
  };

  const navigateToFaq = () => {
    router.push("/home/faq");
  };

  const navigateToWaitlist = () => {
    router.push("/home/waitlist");
  };

  const navigateToCommunity = () => {
    window.open(
      "https://discord.gg/uHPUdNZxKm",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const navigateToGithub = () => {
    window.open(
      "https://github.com/WhyTheApp",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <FooterContainer>
      <ItemTitle>Why, the app</ItemTitle>

      <ColumnsContainer>
        <ItemContainer>
          <ItemTitle>About WHY</ItemTitle>
          <ItemText onClick={navigateToBlueprint}>Blueprint</ItemText>
          <ItemText onClick={navigateToRoadmap}>Roadmap</ItemText>
          <ItemText onClick={navigateToFaq}>FAQ</ItemText>
        </ItemContainer>
        <ItemContainer>
          <ItemTitle>Join the cause</ItemTitle>
          <ItemText onClick={navigateToWaitlist}>Waitlist</ItemText>
          <ItemText onClick={navigateToCommunity}>Community</ItemText>
          <ItemText onClick={navigateToGithub}>Github repos</ItemText>
        </ItemContainer>
        <ItemContainer>
          <ItemTitle>Privacy & Safety</ItemTitle>
          <ItemText onClick={navigateToPrivacy}>Privacy policy</ItemText>
          <ItemText onClick={navigateToTerms}>Terms and conditions</ItemText>
        </ItemContainer>
      </ColumnsContainer>
    </FooterContainer>
  );
};

export default Footer;
