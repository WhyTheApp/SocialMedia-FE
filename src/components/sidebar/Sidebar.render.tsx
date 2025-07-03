import {
  NavigationContainer,
  SidebarContainer,
  SocialMediaContainer,
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
import { usePathname, useRouter } from "next/navigation";
import { getUserName, getUserUsername } from "@/services/TokenManager";
import SocialMediaGroup from "../social-media-group/SocialMediaGroup.render";

const Sidebar = () => {
  const pathname = usePathname();
  const indexOfTab = 2;
  const initialButton = pathname.split("/")[indexOfTab] || "waitlist";
  const [clickedButton, setClickedButton] = useState<string | null>(
    initialButton
  );
  const router = useRouter();

  const navigateToLogin = () => {
    router.push("/login");
  };

  return (
    <SidebarContainer>
      <StyledLogo />
      <UserArea>
        <StyledUserImage />
        <UserDetails onClick={navigateToLogin}>
          <UsernameText>
            {getUserName() ? getUserName() : PLACEHOLDERS.UserHandle}
          </UsernameText>
          <UsernameHandle>
            {getUserName() ? `@${getUserUsername()}` : PLACEHOLDERS.UserName}
          </UsernameHandle>
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
      <SocialMediaContainer>
        <SocialMediaGroup />
      </SocialMediaContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
