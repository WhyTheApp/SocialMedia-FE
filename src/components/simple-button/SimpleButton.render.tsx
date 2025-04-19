import { StyledButton } from "./SimpleButton.style";

const SimpleButton = ({
  onClick,
  buttonText,
}: {
  onClick: any;
  buttonText: any;
}) => {
  return <StyledButton onClick={onClick}>{buttonText}</StyledButton>;
};

export default SimpleButton;
