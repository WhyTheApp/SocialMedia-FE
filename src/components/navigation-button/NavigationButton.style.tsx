import styled from "styled-components";

export const NavButtonContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const NavText = styled.span<{ $active?: boolean }>`
  color: ${({ $active }) => ($active ? "#fff" : "#6B6B6B")};
  font-size: 24px;
  font-family: inherit;
  font-weight: 600;
  @media (max-width: 1200px) {
    display: none;
  }
`;
