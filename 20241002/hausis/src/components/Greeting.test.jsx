import { render, screen } from "@testing-library/react";
import React from "react";
import Greeting from "./Greeting";

describe("Greeting Component Rendering", () => {
    test("renders greeting component", () => {
        render(<Greeting name="Max" />);
        const greetingElement = screen.getByText(/Hello, Max!/i);
        expect(greetingElement).toBeInTheDocument();
    });
});
