import sum from "./sample";
import App from "./App";
import { render, screen} from "@testing-library/react";


test("Renders App", ()=>
{
    render(<App/>);
    expect(screen.getByText("Edit")).toBeInTheDocument();
})

test("2 + 5 = 7", () => {
    expect(sum(2,5)).toBe(7);
})