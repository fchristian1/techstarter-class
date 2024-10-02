import { render, screen } from "@testing-library/react";
import React from "react";
import User from "./User";

describe("User Component Rendering", () => {
    test("renders user component", () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve({ name: "John Doe" }),
            })
        );
        render(<User />);
        const loadingElement = screen.getByText(/Loading.../i);
        expect(loadingElement).toBeInTheDocument();
    });
});
