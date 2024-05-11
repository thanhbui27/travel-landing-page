import styled from "styled-components";

export const LayoutContainer = styled.div`
  height: 100%;

  position: relative;
  .circle-red {
    position: absolute;
    left: -500px;
    transform: translateY(-500px);
    z-index: -1;
  }
`;
