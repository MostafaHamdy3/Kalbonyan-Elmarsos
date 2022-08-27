import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello world as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const testElement = screen.getByText("Hello world", { exact: false });
    // use exact: false or write exact you write in main file, here we miss !
    expect(testElement).toBeInTheDocument();
  });

  test("renders good to see you as a paragraph", () => {
    render(<Greeting />);

    const paraElement = screen.getByText("good to see you", { exact: false });
    expect(paraElement).toBeInTheDocument();
  });

  test("renders Changed if the button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });

  test("doesn't render good to see you if the button was clicked", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const outputElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
