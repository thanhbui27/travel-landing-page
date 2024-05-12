import styled from "styled-components";
const BannerContainer = styled.div`
  .banner {
    &-container {
      max-width: 1440px;
      width: 100%;
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 90vh;
      padding: 0 165px;
    }
    &-left {
      max-width: 472px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 43px;
      h1 {
        font-size: ${({ theme }) => theme.pallete.typography.fontSize["5xl"]};
        b {
          color: ${({ theme }) => theme.pallete.text.primary};
        }
      }
      p {
        line-height: 28px;
        color: rgba(25, 24, 37, 0.5);
      }
    }
    &-button {
      display: flex;
      gap: 16px;
    }
    &-right {
      display: flex;
      position: relative;
      gap: 31px;
      &-boximg {
        position: relative;
        &-isend {
          position: absolute;
          transform: translate(-50%, -50%);
        }
      }
      &-column {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 32px;
        position: relative;
        img {
          border-radius: 32px;
        }
        .icon-addUser {
          position: absolute;
          bottom: 0;
        }
        .icon-location {
          position: absolute;
          right: -30%;
          bottom: 25%;
        }
      }
      &-layer {
        position: absolute;
        z-index: -1;
        left: -25%;
        top: -10%;
      }
    }
  }
`;

export { BannerContainer };
