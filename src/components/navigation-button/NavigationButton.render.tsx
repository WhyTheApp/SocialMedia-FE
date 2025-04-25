import { NavButtonProps, PathToIcon } from "@/CONSTANTS/navigation.constants";
import { NavButtonContainer, NavText } from "./NavigationButton.style";

const NavigationButton = ({ Text, Path, Active, setTab }: NavButtonProps) => {
  let Icon;
  if (Active) Icon = PathToIcon[Path]["active"];
  else Icon = PathToIcon[Path]["inactive"];

  return (
    <NavButtonContainer onClick={Active ? () => setTab!(Path) : undefined}>
      <img color="#fffff" src={`/${Icon}`} alt={Text} width={36} height={36} />
      <NavText $active={Active}>{Text}</NavText>
    </NavButtonContainer>
  );
};

export default NavigationButton;
