import React from "react";
import SignIn from "../../../components/header/SignIn";
import { render } from "@testing-library/react";

describe("SignIn component", () => {
  test("renders button", () => {
    // Arrange
    const { getByRole } = render(<SignIn />);
    const button = getByRole("button");

    // Arrange
    expect(button).toBeInTheDocument();
  });
});
