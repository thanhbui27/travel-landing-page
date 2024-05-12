import { TTypeColor } from "@/types/common/buttonType";
import { ButtonContainer } from "./style";

interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
  text?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  bgColor: TTypeColor;
  boxShadow?: string;
  border?: string;
}

const Button: React.FC<IButton> = ({
  text,
  iconLeft,
  iconRight,
  bgColor,
  boxShadow = "",
  border = "",
}) => {
  return (
    <ButtonContainer bgcolor={bgColor} boxshadow={boxShadow} border={border}>
      {iconLeft} <span>{text}</span> {iconRight}
    </ButtonContainer>
  );
};

export default Button;
