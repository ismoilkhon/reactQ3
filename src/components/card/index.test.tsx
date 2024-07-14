import { render, screen } from "@testing-library/react";
import { Card } from ".";

test("card shows proper content", () => {
  vi.mock("react-router-dom", () => {
    return {
      useNavigate: vi.fn(),
    };
  });

  render(
    <Card
      id={0}
      price={0}
      title={""}
      rating={0}
      thumbnail={""}
      discountPercentage={0}
    />,
  );

  expect(screen.findAllByText("laptop")).toBeTruthy();
  expect(screen.findAllByTitle("useNavigate")).toBeTruthy();
});
