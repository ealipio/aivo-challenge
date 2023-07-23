import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "../src/components/Filter";

describe("Filter component", () => {
  test("should render the 'Filter' button", () => {
    render(<Filter />);
    const filterButton = screen.getByText("Filter");
    expect(filterButton).toBeInTheDocument();
  });

  test("should not render the Modal by default", () => {
    render(<Filter />);
    const modalContainer = document.querySelector(".modal-container");
    expect(modalContainer).toHaveClass("hidden");
  });

  test("should open the Modal when clicking on the 'Filter' button", () => {
    render(<Filter />);
    const filterButton = screen.getByText("Filter");
    const modalContainer = document.querySelector(".modal-container");
    expect(modalContainer).toHaveClass("hidden");

    fireEvent.click(filterButton);

    expect(modalContainer).toHaveClass("fixed");
    expect(modalContainer).not.toHaveClass("hidden");
  });

  test("should close the Modal when clicking on the close button", () => {
    render(<Filter />);
    const modalContainer = document.querySelector(".modal-container");
    const filterButton = screen.getByText("Filter");

    expect(modalContainer).toHaveClass("hidden");

    fireEvent.click(filterButton);

    expect(modalContainer).not.toHaveClass("hidden");
    expect(modalContainer).toHaveClass("fixed");

    const closeButton = document.querySelector(".modal-close-button") as Element;

    fireEvent.click(closeButton);

    expect(modalContainer).toHaveClass("hidden");
  });
});
