module.exports = {
    collectCoverageFrom: ["**/*.{js,jsx,ts,tsx}", "!**/*.d.ts", "!**/.yarn/**"],
    moduleNameMapper: {
        // Handle CSS imports (with CSS modules)
        // https://jestjs.io/docs/webpack#mocking-css-modules
        "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",

        // Handle CSS imports (without CSS modules)
        "^.+\\.(css|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",

        // Handle image imports
        // https://jestjs.io/docs/webpack#handling-static-assets
        "^.+\\.(jpg|jpeg|png|gif|webp|svg)$": `<rootDir>/__mocks__/fileMock.js`,

        // module resolver
        "^@/(.*)$": "<rootDir>/src/$1",
        "^@User/(.*)$": "<rootDir>/src/domains/User/$1",
        "^@Message/(.*)$": "<rootDir>/src/domains/Message/$1",
        "^@Product/(.*)$": "<rootDir>/src/domains/Product/$1",
    },
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    testEnvironment: "jsdom",
    testPathIgnorePatterns: ["<rootDir>/.yarn/", "<rootDir>/.next/"],
    transform: {
        // Use babel-jest to transpile tests with the next/babel preset
        // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
        "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
    },
    transformIgnorePatterns: ["/.yarn/"],
    verbose: true,
};
