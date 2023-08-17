/** @type {import('tailwindcss').Config} */

const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "");

const em = (px, base) => `${round(px / base)}em`;

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        sm: "16px",
        md: "32px",
        lg: "0",
      },
    },
    fontFamily: {
      heading: [' "IBM Plex Sans", "sans-serif" '],
      body: [' "Inter", "sans-serif" '],
      mono: ['"IBM Plex Mono"', "monospace"],
    },
    fontSize: {
      h1: [
        "64px",
        {
          label: "H1",
          lineHeight: "80px",
          letterSpacing: "0px",
          fontWeight: 700,
        },
      ],
      h2: [
        "48px",
        {
          label: "H2",
          lineHeight: "64px",
          letterSpacing: "0px",
          fontWeight: 700,
        },
      ],
      h3: [
        "32px",
        {
          label: "H3",
          lineHeight: "48px",
          letterSpacing: "0px",
          fontWeight: 700,
        },
      ],
      h4: [
        "24px",
        {
          label: "H4",
          lineHeight: "36px",
          letterSpacing: "0px",
          fontWeight: 700,
        },
      ],
      h5: [
        "20px",
        {
          label: "H4",
          lineHeight: "32px",
          letterSpacing: "0px",
          fontWeight: 700,
        },
      ],

      base: [
        "16px",
        {
          label: "body-base",
          lineHeight: "22px",
          letterSpacing: "0px",
          fontWeight: 400,
        },
      ],
      bold: [
        "16px",
        {
          label: "body-base",
          lineHeight: "22px",
          letterSpacing: "0px",
          fontWeight: 600,
        },
      ],
      md: [
        "14px",
        {
          label: "body-base",
          lineHeight: "22px",
          letterSpacing: "0px",
          fontWeight: 400,
        },
      ],
      sm: [
        "12px",
        {
          label: "body-base",
          lineHeight: "18px",
          letterSpacing: "0px",
          fontWeight: 400,
        },
      ],
    },
    fontWeight: {
      h1: 700,
      h2: 700,
      h3: 700,
      h4: 500,
    },
    boxShadow: {
      DEFAULT: "0px_25px_50px_-12px_rgba(95,111,140,0.1)",
      secondary: "0px 2px 2px 0px rgba(0,0,0,0.1)",
      button: "0px 20px 40px -16px rgba(95,111,140,0.3)",
      card: "-1px 2px 10px rgba(0, 0, 0, 0.32)",
      none: "none",
    },
    dropShadow: {
      DEFAULT: "0px_3px_12px_rgba(1,56,106,0.08)",
      "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
      "icon-bg-shadow": ["0px -1px 1px #D8E1EC", "0px 1px 1px #C2D0DE"],
    },
    extend: {
      colors: {
        B: {
          paletteName: "Brand",
          base: "#183AFF",
          10: "#E9F4FF",
          50: "#D7EAFF",
          100: "#B7D8FF",
          200: "#8CBCFF",
          300: "#5F92FF",
          400: "#3A69FF",
          500: "#183AFF",
          600: "#0F2AC4",
          700: "#162D99",
          800: "#0D1859",
        },
        white: "#FFFFFF",
        black: "#0E0E12",
        yellow: "#FFDD18",
        x: "rgba(255, 255, 255, 0.50)",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.N.700"),

            "h1,h2,h3,h4,h5,h6": {
              color: theme("colors.N.800"),
            },

            h1: {
              fontSize: theme("fontSize.h3"),
              marginTop: em(14, 14),
              marginBottom: em(14, 14),
            },

            h2: {
              fontSize: theme("fontSize.h4"),
              marginTop: em(10, 14),
              marginBottom: em(10, 14),
            },

            h3: {
              fontSize: theme("fontSize.h5"),
              marginTop: em(10, 14),
              marginBottom: em(10, 14),
            },

            h4: {
              fontSize: theme("fontSize.h6"),
              marginTop: em(14, 14),
              marginBottom: em(14, 14),
            },

            li: {
              marginTop: em(0, 14),
              marginBottom: em(4, 14),
            },

            ul: {
              marginTop: em(0, 14),
              marginBottom: em(12, 14),
            },

            img: {
              maxWidth: "100%",
            },
          },
        },
      }),
      backgroundImage: {
        "page-lock-bg":
          "linear-gradient(180deg, rgba(248, 251, 253, 0) 0%, red 40.39%, #F8FBFD 100%)",
        "icon-bg": "linear-gradient(180deg, #ECF2F7 0%, #D8E1EC 100%)",
        "icon-bg-hover": "linear-gradient(180deg, #FCE8EB 0%, #F7BAC3 100%)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
