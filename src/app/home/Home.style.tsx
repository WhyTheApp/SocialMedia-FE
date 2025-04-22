import styled from "styled-components";
import { colors } from "../theme";

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

export const SoftText = styled.text`
  color: ${colors.textSoft};
  font-weight: 400;
  font-size: 18px;
  margin-top: -20px;
`;
