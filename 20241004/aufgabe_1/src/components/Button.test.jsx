import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import jest from "jest";
import Button from "./Button";

describe("Button Component Rendering", () => {
    test("Button render corerectly", () => {
        render(<Button></Button>);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });
    test("Button text is Correct", () => {
        render(<Button></Button>);
        const button = screen.getByRole("button");
        expect(button).toHaveTextContent("Click me");
    });
    test("Button click event", () => {
        render(<Button></Button>);
        const button = screen.getByRole("button");
        fireEvent.click(button);
        expect(button).toHaveTextContent("Clicked!");
    });
});
