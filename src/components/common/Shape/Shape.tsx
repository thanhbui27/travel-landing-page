import { EShape } from "@/types/common/ShapeType";
import { CircleShape, SquareRounded } from "./style";

interface IShape {
  size?: "lg" | "xl" | "2xl";
  icon: React.ReactNode;
  typeShape: EShape;
  bgcolor: string;
  boxShadow?: string;
}

const Shape: React.FC<IShape> = ({
  typeShape,
  size = "xl",
  icon,
  bgcolor,
  boxShadow = "",
}) => {
  const sizeShapeCircle = {
    lg: "16px",
    xl: "24px",
    "2xl": "36px",
  }[size];

  const sizeShapeSquare = {
    lg: "50px",
    xl: "100px",
    "2xl": "100px",
  }[size];

  const typeShapeRender = {
    [EShape.CIRCLE]: (
      <CircleShape
        size={sizeShapeCircle}
        bgcolor={bgcolor}
        boxshadow={boxShadow}
      >
        <div className="icon">{icon}</div>
      </CircleShape>
    ),
    [EShape.SQUARE]: (
      <SquareRounded
        size={sizeShapeSquare}
        bgcolor={bgcolor}
        boxshadow={boxShadow}
      >
        <div className="icon">{icon}</div>
      </SquareRounded>
    ),
  }[typeShape];

  return typeShapeRender;
};

export default Shape;
