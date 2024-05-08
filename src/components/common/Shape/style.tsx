import styled from "styled-components";

interface Props {
  size: string;
  bgcolor: string;
}

const CircleShape = styled.div<Props>`
  display: inline-block;
  .icon {
    padding: ${(props) => props.size};
    background-color: ${(props) => props.bgcolor};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const SquareRounded = styled.div<Props>`
  box-sizing: content-box;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  background-color: ${(props) => props.bgcolor};
  border-radius: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { CircleShape, SquareRounded };
