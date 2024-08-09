/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray1: {
          "100": "#fafafa",
          "200": "#878787",
          "300": "#2b2b2b",
          "400": "#1f1e1a",
          "500": "#18181b",
          "600": "#121212",
          "700": "#111",
          "800": "#0c0c0c",
        },
        dimgray: "rgba(92, 95, 104, 0.3)",
        moccasin: {
          "100": "rgba(255, 236, 187, 0.23)",
          "200": "rgba(255, 236, 187, 0.2)",
        },
        white: "#fff",
        blueviolet: "rgba(54, 51, 208, 0.1)",
        darkslategray: {
          "100": "#414141",
          "200": "rgba(57, 49, 49, 0.48)",
        },
        mediumslateblue: "#1a5cff",
        lightslategray: "#93a0b9",
        stroke: "#363e54",
        "gray-500": "#667085",
        slategray: "#5b657e",
        "dark-foregrounds-fg-base": "#edeef0",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        "readex-pro": "'Readex Pro'",
      },
      borderRadius: {
        "19701xl-3": "19720.3px",
        "81xl": "100px",
        "31xl": "50px",
        "3xs": "10px",
        "16xl": "35px",
        "9980xl": "9999px",
        "23358xl-3": "23377.3px",
        "22xl-8": "41.8px",
        "14xl-4": "33.4px",
        "base-7": "16.7px",
      },
    },
    fontSize: {
      "xs-7": "11.7px",
      "sm-9": "13.9px",
      lg: "18px",
      xs: "12px",
      sm: "14px",
      base: "16px",
      "41xl": "60px",
      "17xl": "36px",
      "29xl": "48px",
      smi: "13px",
      xl: "20px",
      "lgi-5": "19.5px",
      "base-7": "16.7px",
      "3xl-3": "22.3px",
      "14xl-4": "33.4px",
      "8xl": "27px",
      mid: "17px",
      "11xl": "30px",
      "5xl": "24px",
      inherit: "inherit",
    },
    screens: {
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      mq1225: {
        raw: "screen and (max-width: 1225px)",
      },
      lg: {
        max: "1200px",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
