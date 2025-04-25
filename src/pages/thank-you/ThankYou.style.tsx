import styled from "styled-components";
import { colors } from "../../app/theme";

export const CenteredContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
`;

export const SoftTitle = styled.text`
  color: ${colors.textSoft};
  font-weight: 200;
  font-size: 21px;
`;

export const NormalText = styled.text`
  color: ${colors.text};
  font-weight: 500;
  font-size: 15px;
`;

export const InputContainer = styled.div`
  position: relative;
  height: 30%;
  width: 30%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  background-color: ${colors.accent};
  margin: 0 auto;
  @media (max-width: 1400px) {
    position: static;

    padding: 20px;
    width: 60%;
  }

  @media (max-width: 800px) {
    position: static;

    overflow: auto;

    padding: 20px;
    width: 80%;
  }
`;
