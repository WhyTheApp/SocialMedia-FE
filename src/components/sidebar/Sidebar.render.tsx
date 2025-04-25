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
import { PLACEHOLDERS } from "@/CONSTANTS/placeholders.constants";
import { NavigationButtons, TabProps } from "@/CONSTANTS/navigation.constants";

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
