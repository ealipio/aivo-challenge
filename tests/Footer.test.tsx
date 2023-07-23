import "@testing-library/jest-dom";
import Footer from "../src/components/Footer";
import { render, screen } from "@testing-library/react";

describe("Footer component", () => {
  test("should render 'Made with' text", () => {
    render(<Footer />);
    const madeWithText = screen.getByText(/Made with/i);
    expect(madeWithText).to.exist;
  });

  test("should render 'By Eisson' text", () => {
    const { getByText } = render(<Footer />);
    const byEissonText = getByText(/By Eisson/i);
    expect(byEissonText).to.exist;
  });

  test("should render the HeartIcon", () => {
    const { container } = render(<Footer />);

    const svgElement = container.querySelector("svg");
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveClass("h-6 w-6 text-pink-600");
  });
});
