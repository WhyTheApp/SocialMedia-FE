import { NavButtonProps, PathToIcon } from "@/CONSTANTS/navigation.constants";
import { NavButtonContainer, NavIcon, NavText } from "./NavigationButton.style";
import { useRouter } from "next/navigation";

const NavigationButton = ({
  Text,
  Path,
  Active,
  Clicked,
  setClickedButton,
  Key,
}: NavButtonProps) => {
  const Icon = PathToIcon[Path];
  const router = useRouter();

  const handleClick = () => {
    setClickedButton(Key);
    router.push("/home/" + Path);
  };

  return (
    <NavButtonContainer
      onClick={Active ? handleClick : undefined}
      clicked={Clicked}
    >
      <NavIcon icon={Icon} alt={Text} active={Active} clicked={Clicked} />
      <NavText active={Active} clicked={Clicked}>
        {Text}
      </NavText>
    </NavButtonContainer>
  );
};

export default NavigationButton;
