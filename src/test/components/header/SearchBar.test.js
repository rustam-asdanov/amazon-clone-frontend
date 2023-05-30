import React from "react";
import SearchBar from "../../../components/header/SearchBar";
import { fireEvent, render } from "@testing-library/react";

describe("search bar component", () => {
  test("render input element", () => {
    // Arrange
    const { getByTestId } = render(<SearchBar />);
    const inputElement = getByTestId("search-bar-input");

    // Act
    fireEvent.change(inputElement, { target: { value: "test" } });

    // Assert
    expect(inputElement.value).toBe("test");
  });
});
