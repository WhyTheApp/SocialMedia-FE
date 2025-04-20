import { StyledButton } from "./SimpleButton.style";

const SimpleButton = ({
  onClick,
  buttonText,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  buttonText: string;
}) => {
  return <StyledButton onClick={onClick}>{buttonText}</StyledButton>;
};

export default SimpleButton;
