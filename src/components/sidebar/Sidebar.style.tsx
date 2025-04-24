import styled from "styled-components";
import Logo from "../../../public/whylogo.svg";
import UserImage from "../../../public/user-placeholder.svg";

const UserImageSize = "77px";
const MiniUserImageSize = "40px";

const LogoSize = "115px";

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 1200px) {
    align-items: center;
  }
`;

export const StyledLogo = styled(Logo)`
  width: ${LogoSize};
  height: ${LogoSize};
`;

export const StyledUserImage = styled(UserImage)`
  height: ${UserImageSize};
  width: ${UserImageSize};
  margin: auto;

  @media (max-width: 800px) {
    height: ${MiniUserImageSize};
    width: ${MiniUserImageSize};
  }
`;

export const UserArea = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;
`;

export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  max-height: ${UserImageSize};
  gap: 5px;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const UsernameText = styled.p`
  align-self: center;
  color: white;
  font-size: 18px;
  margin: 0;
  margin-top: 10px;
`;

export const UsernameHandle = styled.p`
  color: #a1a1a1;
  font-size: 14px;
  margin: 0;
  align-self: flex-start;
`;

export const NavigationContainer = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 1200px) {
    padding: 25px;
  }
`;
