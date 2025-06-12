import type { ZudokuConfig } from "zudoku";

const config: ZudokuConfig = {
  page: {
    logo: {
      src: { light: "/logo.svg", dark: "/logo.svg" },
      alt: "Buu AI",
      width: "100px",
    },
  },
  topNavigation: [
    { id: "api", label: "API Reference" },
  ],
  redirects: [{ from: "/", to: "/api" }],
  apis: {
    type: "file",
    input: "./apis/openapi.json",
    navigationId: "api",
  },
};

export default config;
