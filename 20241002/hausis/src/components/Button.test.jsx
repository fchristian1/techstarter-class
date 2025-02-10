import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";

import Button from "./Button";

describe("Button Component Rendering", () => {
    test("renders button component", () => {
        render(<Button />);
        const buttonElement = screen.getByText(/Click me/i);
        expect(buttonElement).toBeInTheDocument();
    });
    test("Button click changes text", () => {
        render(<Button />);
        const buttonElement = screen.getByText(/Click me/i);
        fireEvent.click(buttonElement);
        expect(screen.getByText(/Clicked!/i)).toBeInTheDocument();
    });
});
