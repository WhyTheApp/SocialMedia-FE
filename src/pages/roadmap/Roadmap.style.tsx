import styled from "styled-components";

export const RoadmapWrapper = styled.div`
  max-width: 800px;
  margin: 3rem auto;
  padding: 1rem;
  border-left: 3px solid white;
`;

export const RoadmapItem = styled.div`
  position: relative;
  padding: 1rem 1rem 1rem 2rem;
  margin-bottom: 2rem;

  &::before {
    content: "";
    position: absolute;
    left: -12px;
    top: 1.2rem;
    width: 12px;
    height: 12px;
    border: 2px solid white;
    border-radius: 50%;
  }

  h3 {
    margin: 0 0 0.25rem;
    color: white;
  }

  p {
    margin: 0;
    color: white;
  }
`;

export const Label = styled.span`
  font-size: 0.875rem;
  color: #d1d5db;
  font-weight: 600;
`;

export const CurrentBadge = styled.span`
  background: white;
  color: black;
  font-size: 0.75rem;
  padding: 0.2rem 0.5rem;
  border-radius: 9999px;
  margin-left: 0.5rem;
  vertical-align: middle;
`;
