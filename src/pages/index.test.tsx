import Login from "./index";
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react";

it("Render tabs lists", () => {
    render(<Login />)

    expect(screen.getByTestId('login')).toBeInTheDocument();
})