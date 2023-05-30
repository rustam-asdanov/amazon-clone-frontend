import React from "react";
import Cart from "../../../components/header/Cart";
import cart_icon from "../../../assets/cart.png";
import { render, screen } from "@testing-library/react";

describe("cart component", () => {
  test("renders cart image", () => {
    // Arrange
    const { getByAltText } = render(<Cart />);

    // Assert
    const cartIconElement = getByAltText("cart");

    expect(cartIconElement).toBeInTheDocument();
    expect(cartIconElement.src).toContain(cart_icon);
  });
});
