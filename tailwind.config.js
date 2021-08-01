module.exports = {
  mode: "jit",
  purge: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    fill: (theme) => ({
      red: theme("colors.red.700"),
      green: theme("colors.green.500"),
      blue: theme("colors.blue.500"),
    }),
    extend: {
      colors: {
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      boxShadow: {
        small: "0 5px 10px rgba(0, 0, 0, 0.12)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
      transitionProperty: {
        spacing: "margin, padding",
      },
    },
  },
  variants: {
    extend: {
      fill: ["group-hover", "hover", "focus"],
    },
  },
};
