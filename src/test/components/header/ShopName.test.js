import React from "react";
import ShopName from "../../../components/header/ShopName";
import { render } from "@testing-library/react";

describe("ShopName component", () => {
  test("renders shop name", () => {
    // Arrange
    const { getByText } = render(<ShopName />);
    const titleElement = getByText(/nile shop/i);

    // Assert
    expect(titleElement).toBeInTheDocument();
  });

  test("renders shop icon", () => {
    // Arrange
    const { getByAltText } = render(<ShopName />);
    const iconElement = getByAltText(/store icon/i);

    // Assert
    expect(iconElement).toBeInTheDocument();
  });
});
