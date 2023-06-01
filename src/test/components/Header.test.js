import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../../components/Header";

describe("header component", () => {
  test("render all components", () => {
    render(<Header />);
    // Assert that the navigation component exists
    const navElement = screen.getByRole("navigation");
    expect(navElement).toBeInTheDocument();
  });
});
