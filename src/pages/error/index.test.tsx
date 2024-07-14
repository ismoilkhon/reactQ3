import ErrorPage from ".";
import { render, screen } from "@testing-library/react";

vi.mock("react-router-dom", () => {
  return {
    useRouteError: vi.fn(() => ({
      statusText: "error",
      message: "Page doesn't exist",
    })),
  };
});

test("ErrorPage shows proper content", () => {
  render(<ErrorPage />);

  console.log(screen.findAllByText("Oops!"));
  expect(screen.findAllByText("Oops!")).toBeTruthy();
});
