import { render, screen } from "@testing-library/react";
import DragNDrop from "./dragNdrop";

describe("DragNDrop tests", () => {
  const children = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"];
  test("Default list renders each children correctly", () => {
    render(<DragNDrop items={children} />);
    children.forEach((item, index) => {
      const element = screen.getAllByTestId(`styled-draggable-${index}`);
      expect(element).not.toBe(null);
    });
  });
});
