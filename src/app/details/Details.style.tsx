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
  color: ${colors.text2};
  font-weight: 500;
  font-size: 15px;
`;

export const StyledLabel = styled.label`
  color: ${colors.text2};
`;

export const InputWithTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  width: 100%;
  margin: 0 auto;
  gap: 5px;
`;

export const InputContainer = styled.div`
  position: relative;
  height: 50%;
  width: 40%;
  min-height: 200px;
  min-width: 300px;
  border-radius: 30px;
  overflow: hidden;

  @media (max-width: 1700px) {
    position: static;
    justify-content: flex-start;

    height: 70%;
    width: 60%;
  }

  @media (max-width: 1400px) {
    position: static;
    justify-content: flex-start;

    height: 70%;
    width: 60%;
  }

  @media (max-width: 800px) {
    position: static;
    justify-content: flex-start;

    overflow: auto;

    height: 70%;
    width: 80%;
  }
`;

export const InputInner = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  background-color: ${colors.accent};
  background: linear-gradient(135deg, #111, #222);

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
  margin: 0 auto;
  overflow: auto;
  @media (max-width: 1400px) {
    position: static;
    justify-content: flex-start;

    padding: 20px;
  }

  @media (max-width: 800px) {
    position: static;
    justify-content: flex-start;

    overflow: auto;

    padding: 20px;
  }
`;

export const BottomCutout = styled.div`
  height: 80px;
  width: 190px;
  border-top-left-radius: 30px;
  background-color: ${colors.gradientMidpoint};
  position: absolute;
  bottom: 0;
  right: 0;

  @media (max-width: 1700px) {
    display: none;
    position: relative;
  }
`;

export const BottomButton = styled.button`
  height: 50px;
  width: 150px;
  border-radius: 20px;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-weight: 600;
  border: none;
  outline: none;
  box-shadow: none;
  position: absolute;
  right: 0;
  bottom: 0;
  background-color: #222;
  color: ${colors.text2};

  @media (max-width: 1700px) {
    position: static;
    background-color: ${colors.gradientMidpoint};
    color: ${colors.text2};
  }

  @media (max-width: 1000px) {
    position: static;
    height: 100px;
    background-color: ${colors.gradientMidpoint};
    color: ${colors.text2};
  }
`;

export const CustomInput = styled.input`
  width: 40%;
  height: 50px;

  background-color: ${colors.gradientMidpoint};
  color: ${colors.textSoft};
  border-radius: 10px;

  font-weight: 200;
  font-size: 12px;

  padding: 0 8px;

  border: none;
  outline: none;

  @media (max-width: 800px) {
    width: 80%;
  }
`;

export const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
  width: 16px;
  height: 16px;
  accent-color: ${colors.gradientMidpoint};
  border-radius: 4px;
  appearance: none;
  background-color: white;
  border: 1.5px solid #aaa;
  cursor: pointer;
  display: inline-block;
  position: relative;
  justify-self: center;
  align-self: center;
  margin-right: 5px;
  margin-bottom: 0px;

  &:checked {
    background-color: ${colors.gradientMidpoint};
    border-color: ${colors.gradientMidpoint};
  }

  &:checked::after {
    content: "";
    position: absolute;
    top: 2px;
    left: 5px;
    width: 4px;
    height: 8px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;
