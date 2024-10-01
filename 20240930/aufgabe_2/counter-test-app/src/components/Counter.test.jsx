import { render, screen } from "@testing-library/react";
import Counter from "./Counter";

test("renders Counter component", () => {
    render(<Counter />);
    const countElement = screen.getByText(/count/i);
    expect(countElement).toBeInTheDocument();
});
