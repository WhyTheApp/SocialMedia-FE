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
  width: 35%;
  padding-left: 30px;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;

  @media (max-width: 1200px) {
    padding-left: 10px;
    align-items: center;
    width: 10%;
  }

  @media (max-width: 900px) {
    padding-left: 10px;
    align-items: center;
    width: 15%;
  }

  @media (max-width: 7500px) {
    padding-left: 10px;
    align-items: center;
    width: 20%;
  }
`;

export const MainContainer = styled.div`
  width: 65%;
  padding: 20px;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
  @media (max-width: 1200px) {
    width: 90%;
  }
  @media (max-width: 900px) {
    width: 85%;
  }

  @media (max-width: 750px) {
    width: 80%;
  }
`;
