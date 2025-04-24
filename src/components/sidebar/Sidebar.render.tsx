import { PLACEHOLDERS } from "@/constants";
import {
  NavigationContainer,
  StyledLogo,
  StyledUserImage,
  UserArea,
  UserDetails,
  UsernameHandle,
  UsernameText,
} from "./Sidebar.style";

const Sidebar = () => {
  return (
    <>
      <StyledLogo />
      <UserArea>
        <StyledUserImage />
        <UserDetails>
          <UsernameText>{PLACEHOLDERS.UserName}</UsernameText>
          <UsernameHandle>{PLACEHOLDERS.UserHandle}</UsernameHandle>
        </UserDetails>
      </UserArea>

      <NavigationContainer></NavigationContainer>
    </>
  );
};

export default Sidebar;
