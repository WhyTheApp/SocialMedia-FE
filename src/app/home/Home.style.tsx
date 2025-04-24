import styled from "styled-components";

export const CenterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const CenterDivider = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  border-left: 1px solid white;
  border-right: 1px solid white;

  @media (max-width: 1200px) {
    width: 100%;
    border-left: none;
    border-right: none;
  }
`;

export const SidebarContainer = styled.div`
  width: 30%;
  padding-left: 30px;

  @media (max-width: 1200px) {
    width: 10%;
  }
  @media (max-width: 750px) {
    display: none;
  }
`;

export const MainContainer = styled.div`
  width: 70%;
  padding: 20px;
  @media (max-width: 1200px) {
    width: 90%;
  }
  @media (max-width: 750px) {
    width: 100%;
  }
`;
