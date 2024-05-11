import styled from "styled-components";

interface Props {
  size: string;
  bgcolor: string;
  boxshadow: string;
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
    ${(props) =>
      props.boxshadow === "true" &&
      "box-shadow: 0px 126px 35px 0px rgba(0, 0, 0, 0.00), 0px 81px 32px 0px rgba(0, 0, 0, 0.01), 0px 45px 27px 0px rgba(0, 0, 0, 0.05), 0px 20px 20px 0px rgba(0, 0, 0, 0.09), 0px 5px 11px 0px rgba(0, 0, 0, 0.10), 0px 0px 0px 0px rgba(0, 0, 0, 0.10);"}
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
  ${(props) =>
    props.boxshadow === "true" &&
    "box-shadow: 0px 126px 35px 0px rgba(0, 0, 0, 0.00), 0px 81px 32px 0px rgba(0, 0, 0, 0.01), 0px 45px 27px 0px rgba(0, 0, 0, 0.05), 0px 20px 20px 0px rgba(0, 0, 0, 0.09), 0px 5px 11px 0px rgba(0, 0, 0, 0.10), 0px 0px 0px 0px rgba(0, 0, 0, 0.10);"}
`;

export { CircleShape, SquareRounded };
