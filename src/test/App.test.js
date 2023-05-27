import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders learn react", () => {
  // arrange
  render(<App />);

  // act - when you check some functions
  // in this test no functions there for ...nothing

  // assert
  /**
   * there is three main types of methods of screen:
   * -get function throw error if can not find given expression
   * -find function return promis
   * -query function ???
   */
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
