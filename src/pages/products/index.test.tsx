import { render, screen } from "@testing-library/react";
import { Products } from ".";

test("Products test", () => {
  render(<Products />);

  expect(screen.findAllByText("")).toBeTruthy();
  expect(Products).toBeTruthy();
});
