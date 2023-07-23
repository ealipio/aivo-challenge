import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "../src/components/Header";

describe("Header", () => {
  beforeEach(() => {
    render(<Header />);
  });
  test('should render logo "StreamingFly"', () => {
    const logoElement = screen.getByText(/StreamingFly/i);
    expect(logoElement).toBeInTheDocument();
  });

  test("should render a", () => {
    const homeLinkElement = screen.getByRole("link", { name: /StreamingFly/i });
    expect(homeLinkElement).toHaveAttribute("href", "/");
  });
});
