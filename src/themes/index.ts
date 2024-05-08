const size = {
  mobile: "375px",
  desktop: "1440px",
  tablet: "768px",
};
export const theme = {
  pallete: {
    common: {
      white: "#ffffff",
      black: "#000",
    },
    text: {
      primary: `#F85E9F`,
      secondary: "#FF5722",
      tertiary: `rgba(25, 24, 37, 0.75)`,
    },
    color: {
      white: "#ffffff",
      orange: "#FF5722",
      indigo: "#5D50C6",
      brightSun: "#FACD49",
      brightSunLight: "#FACD4914",
    },

    typography: {
      htmlFontSize: "14px",
      CirclarBook: "CirclarBook",
      CirclarBold: "CirclarBold",
      CirclarBlack: "CirclarBlack",
      CirclarMedium: "CirclarMedium",
      fontSize: {
        xs: "0.75rem", //12px
        base: "0.875rem", //14px
        lg: "1rem", //16px
        xl: "1.5rem", //24px
        "2xl": "2rem", // 32px
        "3xl": "2.75rem", //44px
      },
    },
    
    device: {
      small: `only screen and (max-width: ${size.mobile})`,
      large: `only screen and (max-width: ${size.desktop})`,
      medium: `only screen and (max-width: ${size.tablet})`,
    },
  },
};
