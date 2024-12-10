import { defineConfig } from "cypress";

async function setupFilePreprocessor(on, config) {
    const { default: filePreprocessor } = await import("@cypress/code-coverage/use-babelrc");
    on("file:preprocessor", filePreprocessor);
    return config;
}

export default defineConfig({
    // fixturesFolder: false,
    env:{},
    //for E2E
  e2e: {
      async setupNodeEvents(on, config) {
          const codeCoverageTask = await import("@cypress/code-coverage/task");
          codeCoverageTask.default(on, config);
          // on("file:preprocessor", await import("@cypress/code-coverage/use-babelrc"));
          // on("file:preprocessor", async (filepath) => {
          //     const useBabelRc = await import("@cypress/code-coverage/use-babelrc");
          //     return useBabelRc.default(filepath);
          // });
          // const filePreprocessor = await import("@cypress/code-coverage/use-babelrc");
          // on("file:preprocessor", filePreprocessor.default);
          // const { default: filePreprocessor } = await import('@cypress/code-coverage/use-babelrc');
          // on("file:preprocessor", filePreprocessor);



          return config;
      },
    baseUrl: "http://127.0.0.1:8000/",
      specPattern: 'cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}',
      // supportFile:'cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}', // for unit вроде как
      video:false
  },
    //for UI
  component: {
      specPattern:'**/*.cy.{js,jsx,ts,tsx}',
      devServer: {
      framework: "vue",
      bundler: "vite",
    },
  },
});
