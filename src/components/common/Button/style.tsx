import { TTypeColor } from "src/types/common/buttonType";
import styled from "styled-components";

interface Props {
  bgcolor: TTypeColor;
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
  span {
    font-size: ${(props) => props.theme.pallete.typography.fontSize["base"]};
  }
`;
