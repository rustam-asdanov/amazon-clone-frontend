import { render, screen } from "@testing-library/react";
import Header from "../../components/Header";

describe("header component", () => {
    test("render nile shop as a text", () => {
        // Arrange
        render(<Header />);

        // Act 
        // ...nothing

        // Assert
        const nileShop = screen.getByText(/nile shop/i);
        expect(nileShop).toBeInTheDocument();
    });
})
