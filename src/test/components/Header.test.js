import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "../../components/Header";
import { act } from "react-dom/test-utils";

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

  test("render not clicked", () => {
    // Arrange
    render(<Header />);

    // Act
    const buttonElement = screen.getByRole("button");

    // Assert
    const notClicked = screen.getByText(/not clicked/i);
    expect(notClicked).toBeInTheDocument();
  });

  test("render clicked", () => {
    // Arrange
    render(<Header />);

    // Act
    act(() => {
      const buttonElement = screen.getByRole("button");
      userEvent.click(buttonElement);
    });

    // Assert
    const clickedText = screen.getByText(/clicked/i);
    expect(clickedText).toBeInTheDocument();
    expect(clickedText).toBeEnabled();
  });

  test("render not clicked", () => {
    // Arrnage
    render(<Header />);

    // Act
    act(() => {
      const buttonElement = screen.getByRole("button");
      userEvent.click(buttonElement);
    });

    // Assert
    const notClickedText = screen.queryByText(/not clicked/i);
    expect(notClickedText).toBeNull();
  });
});
