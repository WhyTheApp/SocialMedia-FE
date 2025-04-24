import { NavigationButtons, PLACEHOLDERS, TabProps } from "@/constants";
import {
  NavigationContainer,
  SidebarContainer,
  StyledLogo,
  StyledUserImage,
  UserArea,
  UserDetails,
  UsernameHandle,
  UsernameText,
} from "./Sidebar.style";
import NavigationButton from "../navigation-button";

const Sidebar = ({ setTab }: TabProps) => {
  return (
    <SidebarContainer>
      <StyledLogo />
      <UserArea>
        <StyledUserImage />
        <UserDetails>
          <UsernameText>{PLACEHOLDERS.UserName}</UsernameText>
          <UsernameHandle>{PLACEHOLDERS.UserHandle}</UsernameHandle>
        </UserDetails>
      </UserArea>

      <NavigationContainer>
        {NavigationButtons.map(({ Text, Path, Active }) => (
          <NavigationButton
            key={Text + Path + (Active ? "active" : "inactive")}
            Text={Text}
            Path={Path}
            Active={Active}
            setTab={setTab}
          />
        ))}
      </NavigationContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
