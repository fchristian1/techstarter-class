import { cleanup, fireEvent, render } from "@testing-library/react";
import Greeting from "../components/Greeting";

afterEach(cleanup);
it("should render greeting", () => {
    const user = {
        name: "Ulli",
        age: 42,
    };
    const { getByText } = render(<Greeting user={user} />);
    expect(getByText("Hello, Ulli!")).toBeTruthy();
});
