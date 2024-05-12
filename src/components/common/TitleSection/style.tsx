import styled from "styled-components";

interface Props {
  titlealign: string;
}

const TitleSectionContainer = styled.div<Props>`
  text-align: ${({ titlealign }) => titlealign};
  h2 {
    font-size: ${({ theme }) => theme.pallete.typography.fontSize.xl};
    color: ${({ theme }) => theme.pallete.text.primary};
    letter-spacing: 5px;
  }
  h3 {
    margin-top: 16px;
    font-size: ${({ theme }) => theme.pallete.typography.fontSize["3xl"]};
  }
`;

export { TitleSectionContainer };
