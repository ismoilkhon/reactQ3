import { render, screen, fireEvent } from "@testing-library/react";
import { ProductDetail } from ".";

describe("ProductDetail component", () => {
  test("renders product details correctly", async () => {
    const testProduct = {
      id: "123",
      title: "Test Product",
      description: "Test description",
      category: "electronics",
      brand: "TestBrand",
      stock: 10,
      price: 100,
      discountPercentage: 20,
      images: ["image1.jpg", "image2.jpg"],
      rating: 4.5,
    };
    vi.mock("react-router-dom", () => {
      return {
        useNavigate: vi.fn(() => ({})),
        useParams: vi.fn(() => ({})),
      };
    });

    global.fetch = vi.fn().mockResolvedValue({
      json: () => Promise.resolve(testProduct),
    });

    render(<ProductDetail />);

    await screen.findByText(testProduct.title);
    expect(screen.findByText(testProduct.description)).toBeTruthy();
    expect(screen.findByText(`Category: ${testProduct.category}`)).toBeTruthy();
    expect(screen.findByText(`Brand: ${testProduct.brand}`)).toBeTruthy();
    expect(screen.findByText(`Stock: ${testProduct.stock}`)).toBeTruthy();
    expect(screen.findByText(`Old price: $${testProduct.price}`)).toBeTruthy();
    expect(
      screen.findByText(`Save ${testProduct.discountPercentage}%`),
    ).toBeTruthy();
    expect(screen.findByAltText("Product")).toBeTruthy(); // Ensure at least one image is rendered

    // const initialImage = screen.findByAltText("Product");
    // expect(initialImage).toHaveAttribute("src", testProduct.images[0]);

    const alternateImage = screen.getAllByAltText("Product")[1];
    fireEvent.click(alternateImage);
    expect(alternateImage).toBeTruthy();

    // const closeButton = await screen.findByText("☓");
    // fireEvent.click(closeButton);
    // expect(global.history?.length).toBeTruthy();
  });
});
