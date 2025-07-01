import { StyledButton } from "./SimpleButton.style";

const SimpleButton = ({
  onClick,
  buttonText,
  disabled,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  buttonText: string;
}) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {buttonText}
    </StyledButton>
  );
};

export default SimpleButton;
