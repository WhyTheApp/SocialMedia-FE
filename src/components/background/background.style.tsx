import { backgroundGradients } from "@/app/theme";
import styled from "styled-components";

export const BackgroundContainer = styled.div`
  height: 100vh;
  width: 100vw;

  background: ${backgroundGradients.vertical.default};
  background: ${backgroundGradients.vertical.webkit};
  background: ${backgroundGradients.vertical.moz};
`;
