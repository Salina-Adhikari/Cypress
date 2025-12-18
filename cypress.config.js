import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://stcchildbudget.infodev.com.np",
  
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  
});
