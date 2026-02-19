import {
  NavigationContainer,
  NavigationWrapper,
  SidebarContainer,
  SidebarHeader,
  SocialMediaContainer,
  StyledLogo,
  StyledUserImage,
  UserArea,
  UserDetails,
  UsernameHandle,
  UsernameText,
} from "./Sidebar.style";
import NavigationButton from "../navigation-button";
import TriangleGrid from "../triangle-side";

import { PLACEHOLDERS } from "@/CONSTANTS/placeholders.constants";
import { NavigationButtons } from "@/CONSTANTS/navigation.constants";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getUserName } from "@/services/TokenManager";
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
      <SidebarHeader>
        <StyledLogo />
        <UserArea>
          <StyledUserImage />
          <UserDetails onClick={navigateToLogin}>
            <UsernameText>
              {getUserName() ? getUserName() : PLACEHOLDERS.UserHandle}
            </UsernameText>
            <UsernameHandle>
              {getUserName() ? PLACEHOLDERS.UserLogged : PLACEHOLDERS.UserName}
            </UsernameHandle>
          </UserDetails>
        </UserArea>
      </SidebarHeader>

      <NavigationWrapper>
        <TriangleGrid />
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
      </NavigationWrapper>
      <SocialMediaContainer>
        <SocialMediaGroup />
      </SocialMediaContainer>
    </SidebarContainer>
  );
};

export default Sidebar;

