import "@testing-library/jest-dom";
import { vi } from "vitest";

import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Modal from "../src/components/Modal";

describe("Modal Component", () => {
  test("should open modal", () => {
    render(<Modal isOpen={true} onCloseModal={() => {}} />);

    const modalContainer = document.querySelector(".modal-container");

    expect(modalContainer).toHaveClass("fixed");
  });

  test("should close modal", () => {
    const onCloseModalMock = vi.fn();

    render(<Modal isOpen={true} onCloseModal={onCloseModalMock} />);

    const closeButton = document.querySelector(".modal-close-button") as Element;
    fireEvent.click(closeButton);
    expect(onCloseModalMock).toHaveBeenCalledTimes(1);
  });

  test("should enable and disable the Apply button based on form data", () => {
    render(<Modal isOpen={true} onCloseModal={() => {}} />);

    const filterSelect = screen.getByTestId("filter-select");
    const sortSelect = screen.getByTestId("sort-select");
    const applyButton = screen.getByTestId("apply-button");

    expect(applyButton).toBeDisabled();

    fireEvent.change(filterSelect, { target: { value: "year" } });
    // disable since user should put year
    expect(applyButton).toBeDisabled();

    // put a random year
    const yearInput = screen.getByTestId("year-input");
    fireEvent.change(yearInput, { target: { value: "2022" } });
    // disabled since sort is also required
    expect(applyButton).toBeDisabled();

    fireEvent.change(sortSelect, { target: { value: "title" } });
    expect(applyButton).toBeEnabled();

    fireEvent.change(filterSelect, { target: { value: "" } });
    expect(applyButton).toBeDisabled();
  });
});
