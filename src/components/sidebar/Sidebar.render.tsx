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
import { NavigationButtons } from "@/CONSTANTS/navigation.constants";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  const indexOfTab = 2;
  const initialButton = pathname.split("/")[indexOfTab] || "waitlist";

  const [clickedButton, setClickedButton] = useState<string | null>(
    initialButton
  );

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
        {NavigationButtons.map(({ Text, Path, Active }) => {
          const key = Path;
          return (
            <NavigationButton
              key={key}
              Text={Text}
              Path={Path}
              Active={Active}
              Clicked={clickedButton === key}
              setClickedButton={setClickedButton}
              Key={key}
            />
          );
        })}
      </NavigationContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
