import React from "react";
import MyPosts from "../../components/MyPosts";
import { render, screen } from "@testing-library/react";

describe("MyPosts component", () => {
  test("renders posts if request successful", async () => {
    // Arrange
    render(<MyPosts />);

    // Act
    // ... nothing to test yet

    // Assert
    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });

  test("renders posts with mocks", async () => {
    // Arrange
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [
        {
          id: "p1",
          title: "First Post",
        },
      ],
    });
    render(<MyPosts />);

    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).toHaveLength(1);
  });
});
