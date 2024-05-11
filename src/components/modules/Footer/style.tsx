import styled from "styled-components";

const FooterContainer = styled.footer`
  .container {
    max-width: 1440px;
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: start;
    padding: 0px 165px 85px 165px;
    .footer-column {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: start;
      gap: 32px;
      color: rgba(25, 24, 37, 0.5);
      &-menu {
        color: ${({ theme }) => theme.pallete.common.black};
        font-size: ${({ theme }) => theme.pallete.typography.fontSize.xl};
      }
      &-icon {
        display: flex;
        gap: 10px;
      }
      p {
        max-width: 278px;
        line-height: 25px;
      }
      ul {
        display: flex;
        flex-direction: column;
        gap: 32px;
      }
    }
  }
`;

export { FooterContainer };
