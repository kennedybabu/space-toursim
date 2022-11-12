import { screen, render } from "@testing-library/react";
import Crew from "./Crew";


test('renders the headline', () => {
    render(<Crew/>)
    const headerElement = screen.getByText(/meet your crew/i)
    expect(headerElement).toBeInTheDocument()
})