import styled from "styled-components";

export const CenterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  @media (max-width: 750px) {
    flex-direction: column;
  }
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

  @media (max-width: 750px) {
    flex-direction: column;
    height: 100%;
    width: 100%;
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

  @media (max-width: 750px) {
    padding-left: 10px;
    align-items: center;
    height: 15%;
    width: 100%;
    overflow-y: hidden;
    overflow-x: auto;
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
    width: 100%;
    height: 85%;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
`;
