import InstagramIcon from "@/icons/social-media-icons/instagram.svg";
import TwitterIcon from "@/icons/social-media-icons/twitter.svg";
import LinkedinIcon from "@/icons/social-media-icons/linkedin.svg";
import ThreadsIcon from "@/icons/social-media-icons/threads.svg";
import TiktokIcon from "@/icons/social-media-icons/tiktok.svg";
import { SocialMediaContainer } from "./SocialMediaGroup.style";

const SocialMediaGroup = () => {
  return (
    <SocialMediaContainer>
      <InstagramIcon
        onClick={() => {
          window.open("https://instagram.com/whytheapp", "_blank");
        }}
      />
      <ThreadsIcon
        onClick={() => {
          window.open("https://threads.com/whytheapp", "_blank");
        }}
      />
      <TwitterIcon
        onClick={() => {
          window.open("https://x.com/whytheapp", "_blank");
        }}
      />
      <LinkedinIcon
        onClick={() => {
          window.open("https://linkedin.com/company/why-app", "_blank");
        }}
      />
      <TiktokIcon
        onClick={() => {
          window.open("https://www.tiktok.com/@whytheapp", "_blank");
        }}
      />
    </SocialMediaContainer>
  );
};

export default SocialMediaGroup;
