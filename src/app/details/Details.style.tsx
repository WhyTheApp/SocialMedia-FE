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

export const NormalText = styled.text`
  color: ${colors.text};
  font-weight: 500;
  font-size: 15px;
`;

export const InputWithTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  width: 100%;
  margin: 0 auto;
`;

export const InputContainer = styled.div`
  position: relative;
  height: 50%;
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  background-color: ${colors.accent};
  margin: 0 auto;

  @media (max-width: 1400px) {
    padding: 20px;
    width: 60%;
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
  background-color: ${colors.accent};

  @media (max-width: 1700px) {
    position: static;
    background-color: ${colors.gradientMidpoint};
    color: ${colors.textSoft};
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
