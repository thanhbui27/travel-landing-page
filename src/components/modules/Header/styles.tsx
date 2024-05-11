import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  .container {
    max-width: 1440px;
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 32px 165px;
    svg {
    }
    nav {
      flex-basis: 42%;
      ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        li {
          a {
            color: ${({ theme }) => theme.pallete.text.tertiary};
            white-space: nowrap;
            &.active {
              color: ${({ theme }) => theme.pallete.common.black};
            }
          }
        }
      }
    }
    .button-action {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export { HeaderContainer };
