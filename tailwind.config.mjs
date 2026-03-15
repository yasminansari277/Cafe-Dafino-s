import containerQueries from "@tailwindcss/container-queries";
import typography from "@tailwindcss/typography";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: "bitter",
        paragraph: "madefor-display"
      },
      colors: {
        footerbackground: "#2E1B17",
        linkcolor: "#5B3A29",
        buttonborder: "#5B3A29",
        foreground: "#5B3A29",
        destructive: "#DF3131",
        "destructive-foreground": "#FFFFFF",
        background: "#F0EDE6",
        secondary: "#D9E0B0",
        "secondary-foreground": "#5B3A29",
        "primary-foreground": "#F0EDE6",
        primary: "#5B3A29"
      }
    }
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: [containerQueries, typography]
};