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

export const SoftTitle = styled.p`
  color: ${colors.textSoft};
  font-weight: 200;
  font-size: 21px;
`;

export const NormalText = styled.p`
  color: white;
  font-weight: 500;
  font-size: 15px;
`;

export const BlockOfTextContainer = styled.div`
  position: relative;
  height: 70%;
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  padding: 20px;
  margin: 0 auto;
  overflow: auto;
`;
