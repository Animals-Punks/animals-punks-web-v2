import "@testing-library/jest-dom/extend-expect";
import { loadEnvConfig } from "@next/env";
(async () => {
    jest.spyOn(global.console, "info").mockImplementation(() => jest.fn());
    const projectDir = process.cwd();
    loadEnvConfig(projectDir);
})();
