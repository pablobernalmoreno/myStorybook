import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Buttons tests", () => {
  const defaultName = "Default";
  const primary = "Primary";
  const secondary = "Secondary";
  const tertiary = "Tertiary";
  test("Default button renders correctly", () => {
    render(<Button />);
    const element = screen.getByTestId("styled-button");
    expect(element).not.toBe(null);
  });
  test("Default button renders with the correct background style", () => {
    render(<Button />);
    const element = screen.getByTestId("styled-button");
    expect(element).toHaveStyle("backgroundColor: #bfbfbf");
  });
  test("Default button renders with correct label", () => {
    render(<Button label={defaultName} />);
    expect(screen.getByText(defaultName)).toBeDefined();
  });
  test("Primary button renders correctly", () => {
    render(<Button variant={primary} />);
    const element = screen.getByTestId("styled-button");
    expect(element).not.toBe(null);
  });
  test("Primary button renders with the correct background style", () => {
    render(<Button variant={primary} />);
    const element = screen.getByTestId("styled-button");
    expect(element).toHaveStyle("backgroundColor: #457dff");
  });
  test("Primary button renders with correct label", () => {
    render(<Button variant={primary} label={primary} />);
    expect(screen.getByText(primary)).toBeDefined();
  });
  test("Secondary button renders correctly", () => {
    render(<Button variant={secondary} />);
    const element = screen.getByTestId("styled-button");
    expect(element).not.toBe(null);
  });
  test("Secondary button renders with the correct background style", () => {
    render(<Button variant={secondary} />);
    const element = screen.getByTestId("styled-button");
    expect(element).toHaveStyle("backgroundColor: #ffc745");
  });
  test("Secondary button renders with correct label", () => {
    render(<Button variant={secondary} label={secondary} />);
    expect(screen.getByText(secondary)).toBeDefined();
  });
  test("Tertiary button renders correctly", () => {
    render(<Button variant={tertiary} />);
    const element = screen.getByTestId("styled-button");
    expect(element).not.toBe(null);
  });
  test("Tertiary button renders with the correct background style", () => {
    render(<Button variant={tertiary} />);
    const element = screen.getByTestId("styled-button");
    expect(element).toHaveStyle("backgroundColor: #8c70ff");
  });
  test("Tertiary button renders with correct label", () => {
    render(<Button variant={tertiary} label={tertiary} />);
    expect(screen.getByText(tertiary)).toBeDefined();
  });
  test("Custom button renders with the correct custom styles", () => {
    const customStyles = {
      backgroundColor: "red",
      color: "black",
    };
    render(<Button customStyles={customStyles} />);
    const element = screen.getByTestId("styled-button");
    expect(element).toHaveStyle(customStyles);
  });
});
