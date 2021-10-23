/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import Index from "@/pages";

describe("App", () => {
    it("renders a heading", () => {
        const { getByRole } = render(<Index />);

        const heading = getByRole("heading", {
            name: /nextjs boilerplate/i,
        });

        expect(heading).toBeInTheDocument();
    });
});
