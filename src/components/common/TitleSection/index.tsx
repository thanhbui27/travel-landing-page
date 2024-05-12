import { TitleSectionContainer } from "./style";

interface ITitleSection {
  title: string;
  titleDetails: string;
  titleAlign: string;
}

const TileSection: React.FC<ITitleSection> = ({
  title,
  titleDetails,
  titleAlign,
}) => {
  return (
    <TitleSectionContainer titlealign={titleAlign}>
      <h2>{title.toUpperCase()}</h2>
      <h3>{titleDetails}</h3>
    </TitleSectionContainer>
  );
};

export default TileSection;
