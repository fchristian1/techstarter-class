import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";
import React from "react";

describe("Counter Component", () => {
    test("Click on Counter Increment", () => {
        render(<Counter />);
        const buttonIncrement = screen.getByText(/increment/i);
        const buttonDecrement = screen.getByText(/decrement/i);
        const counter = screen.getByText("Counter: 0");
        expect(counter).toBeInTheDocument();
        expect(buttonIncrement).toBeInTheDocument();
        fireEvent.click(buttonIncrement);
        expect(screen.getByText("Counter: 1")).toBeInTheDocument();
        fireEvent.click(buttonDecrement);
        expect(screen.getByText("Counter: 0")).toBeInTheDocument();
    });
});
