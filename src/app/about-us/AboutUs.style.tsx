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
  @media (max-width: 1400px) {
    justify-content: flex-start;
  }
`;

export const SoftTitle = styled.p`
  position: absolute;
  color: ${colors.textSoft};
  font-weight: 200;
  font-size: 21px;
  top: 20px;
  left: 20px;
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const HardTitle = styled.p`
  color: white;
  font-weight: 600;
  font-size: 36px;
`;

export const NormalText = styled.p`
  color: ${colors.text};
  font-weight: 700;
  font-size: 15px;
`;

export const CardsContainer = styled.div`
  height: 60%;
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 1400px) {
    height: 80%;
    width: 100%;
  }
`;

export const CardGrid1 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, auto);
  gap: 40px;
  height: 50%;
  width: 100%;

  @media (max-width: 1400px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, auto);
    height: auto;
    width: auto;
  }
`;
export const CardGrid2 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, auto);
  gap: 40px;
  height: 50%;
  width: 100%;

  grid-template-columns: calc(75% - 40px) 25%;

  @media (max-width: 1400px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, auto);
    height: auto;
    width: auto;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  min-height: 200px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: flex-start;
  padding: 40px;
  justify-content: space-between;
  border-radius: 30px;
  background-color: ${colors.accent};
  margin: 0 auto;
  overflow: auto;
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

export const CardTitle = styled.p`
  color: ${colors.text};
  font-weight: 700;
  font-size: 18px;
`;

export const CardFooter = styled.p`
  color: ${colors.text};
  font-weight: 700;
  font-size: 14px;
`;
