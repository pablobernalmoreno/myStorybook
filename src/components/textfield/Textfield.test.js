import { render, screen } from "@testing-library/react";
import Textfield from "./Textfield";

describe("Texfield tests", () => {
  //   const container = screen.getByTestId("styled-input_container");
  //   const label = screen.getByTestId("styled-label");
  const label = "Label";
  const filled = "filled";
  const outlined = "outlined";
  test("Default input field styles", () => {
    render(<Textfield />);
    const styles = {
      backgroundColor: "white",
      boxSizing: "border-box",
      fontSize: "18px",
      height: "100%",
      outline: "0",
      padding: "4px 20px 0",
      width: "100%",
      border: "none",
      borderBottom: "1px solid #457dff",
    };
    const input = screen.getByTestId("styled-input");
    expect(input).toHaveStyle(styles);
  });

  test("Filled input field styles", () => {
    render(<Textfield variant={filled} />);
    const styles = {
      backgroundColor: "#d6d2d2",
      borderRadius: "5px",
      boxSizing: "border-box",
      fontSize: "18px",
      height: "100%",
      outline: "0",
      padding: "4px 20px 0",
      width: "100%",
      border: "none",
    };
    const input = screen.getByTestId("styled-input");
    expect(input).toHaveStyle(styles);
  });

  test("Outlined input field", () => {
    render(<Textfield variant={outlined} />);
    const styles = {
      backgroundColor: "white",
      borderRadius: "5px",
      boxSizing: "border-box",
      fontSize: "18px",
      height: "100%",
      outline: "0",
      padding: "4px 20px 0",
      width: "100%",
      border: "solid 2px #457dff",
    };
    const input = screen.getByTestId("styled-input");
    expect(input).toHaveStyle(styles);
  });

  test("Default label styles", () => {
    render(<Textfield />);
    const styles = {
      fontFamily: "sans-serif",
      left: "20px",
      lineHeight: "14px",
      pointerEvents: "none",
      position: "absolute",
      transformOrigin: "0 50%",
      transition: "transform 200ms",
      top: "20px",
      color: "#a6a6a6",
    };
    const label = screen.getByTestId("styled-label");
    expect(label).toHaveStyle(styles);
  });
  test("Filled label styles", () => {
    render(<Textfield variant={filled} />);
    const styles = {
      fontFamily: "sans-serif",
      left: "20px",
      lineHeight: "14px",
      pointerEvents: "none",
      position: "absolute",
      transformOrigin: "0 50%",
      transition: "transform 200ms",
      top: "20px",
      color: "#807e7e",
    };
    const label = screen.getByTestId("styled-label");
    expect(label).toHaveStyle(styles);
  });
  test("Outlined label styles", () => {
    render(<Textfield variant={outlined} />);
    const styles = {
      fontFamily: "sans-serif",
      left: "20px",
      lineHeight: "14px",
      pointerEvents: "none",
      position: "absolute",
      transformOrigin: "0 50%",
      transition: "transform 200ms",
      top: "20px",
      color: "#a6a6a6",
    };
    const label = screen.getByTestId("styled-label");
    expect(label).toHaveStyle(styles);
  });
  test("Correct label should appear", () => {
    render(<Textfield label={label} />);
    expect(screen.getByText(label)).toBeDefined();
  });
});
