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
  color: ${colors.text2};
  font-weight: 700;
  font-size: 13px;
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
  align-items: center;

  @media (max-width: 1400px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    align-items: center;
  }
`;
export const CardGrid2 = styled.div`
  display: grid;
  grid-template-rows: repeat(1, auto);
  gap: 40px;
  height: 50%;
  width: 100%;

  grid-template-columns: calc(75% - 40px) 25%;

  @media (max-width: 1400px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    align-items: center;
  }
`;
export const InputContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  min-height: 200px;
  min-width: 300px;
  border-radius: 30px;
  overflow: hidden;
  @media (max-width: 1400px) {
    width: 60%;
  }
`;

export const InputInner = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: flex-start;
  padding: 40px;
  justify-content: space-between;
  background-color: ${colors.accent};
  background: linear-gradient(135deg, #111, #222);
  position: relative;

  margin: 0 auto;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.05;
    pointer-events: none;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noisy' x='0' y='0' width='100%25' height='100%25'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noisy)' opacity='1'/%3E%3C/svg%3E");
  }
`;

export const CardTitle = styled.p`
  color: ${colors.text2};
  font-weight: 700;
  font-size: 16px;
`;

export const CardFooter = styled.p`
  color: ${colors.text2};
  font-weight: 700;
  font-size: 12px;
`;
