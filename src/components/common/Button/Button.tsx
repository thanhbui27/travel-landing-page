import { TTypeColor } from "@/types/common/buttonType";
import { ButtonContainer } from "./style";

interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
  text?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  bgColor: TTypeColor;
}

const Button: React.FC<IButton> = ({ text, iconLeft, iconRight, bgColor }) => {
  return (
    <ButtonContainer bgcolor={bgColor}>
      {iconLeft} <span>{text}</span> {iconRight}
    </ButtonContainer>
  );
};

export default Button;
