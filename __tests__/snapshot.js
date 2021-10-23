import React from "react";
import renderer from "react-test-renderer";
import Index from "@/pages";

jest.mock(
    "next/link",
    () =>
        ({ children }) =>
            children
);

it("renders homepage unchanged", () => {
    renderer.create(<Index />).toJSON();
});
