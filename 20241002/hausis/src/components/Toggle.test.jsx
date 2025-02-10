import { render, screen, fireEvent } from "@testing-library/react";

import React from "react";

import Toggle from "./Toggle";

describe("Button Toggeling", () => {
    test("renders button component", () => {
        render(<Toggle />);
        const buttonElement = screen.getByText(/Off/i);
        expect(buttonElement).toBeInTheDocument();
    });
    test("Button click toggles text", () => {
        render(<Toggle />);
        const buttonElement = screen.getByText(/Off/i);
        fireEvent.click(buttonElement);
        expect(screen.getByText(/On/i)).toBeInTheDocument();
    });
});
