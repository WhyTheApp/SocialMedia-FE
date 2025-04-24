import styled from "styled-components";
import Logo from "../../../public/whylogo.svg";
import UserImage from "../../../public/user-placeholder.svg";

const UserImageSize = "77px";

export const StyledLogo = styled(Logo)`
  height: 115px;
`;

export const StyledUserImage = styled(UserImage)`
  height: ${UserImageSize};
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
`;
