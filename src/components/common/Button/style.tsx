import { TTypeColor } from "@/types/common/buttonType";
import styled from "styled-components";

interface Props {
  bgcolor: TTypeColor;
  boxshadow: string;
  border: string;
}

export const ButtonContainer = styled.button<Props>`
  padding: 16px 32px;
  border-radius: 100px;
  background-color: ${(props) => props.theme.pallete.color[props.bgcolor]};
  cursor: pointer;
  color: ${(props) => (props.bgcolor !== TTypeColor.WHITE ? "#eee" : "#000")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  width: fit-content;
  ${(props) =>
    props.boxshadow === "true" &&
    "box-shadow: 0px 126px 35px 0px rgba(0, 0, 0, 0.00), 0px 81px 32px 0px rgba(0, 0, 0, 0.01), 0px 45px 27px 0px rgba(0, 0, 0, 0.05), 0px 20px 20px 0px rgba(0, 0, 0, 0.09), 0px 5px 11px 0px rgba(0, 0, 0, 0.10), 0px 0px 0px 0px rgba(0, 0, 0, 0.10);"}
  ${(props) => props.border === "true" && "border: 1px solid #EEE;"}
  span {
    font-size: ${(props) => props.theme.pallete.typography.fontSize["base"]};
    white-space: nowrap;
  }
`;
