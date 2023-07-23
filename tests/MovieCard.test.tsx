import "@testing-library/jest-dom";

import { render } from "@testing-library/react";
import MovieCard from "../src/components/MovieCard";

const mockMovie = {
  title: "Sherlock: The Abominable Bride",
  description: "description",
  programType: "series",
  images: {
    "Poster Art": {
      url: "https://streamcoimg-a.akamaihd.net/000/115/93/11593-PosterArt-33274b61ab0cb0e19cb7bff35824efb9.jpg",
      width: 1000,
      height: 1500,
    },
  },
  releaseYear: 2016,
};

describe("MovieCard Component", () => {
  test("should render movie title", () => {
    const { getByText } = render(<MovieCard movie={mockMovie} />);
    const titleElement = getByText("Sherlock: The Abominable Bride");
    expect(titleElement).toBeInTheDocument();
  });

  test("should render movie poster image", () => {
    const { getByAltText } = render(<MovieCard movie={mockMovie} />);
    const imageElement = getByAltText("Sherlock: The Abominable Bride") as HTMLImageElement;
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.src).toBe(
      "https://streamcoimg-a.akamaihd.net/000/115/93/11593-PosterArt-33274b61ab0cb0e19cb7bff35824efb9.jpg",
    );
  });

  test("should render movie program type", () => {
    const { getByText } = render(<MovieCard movie={mockMovie} />);
    const programTypeElement = getByText("series");
    expect(programTypeElement).toBeInTheDocument();
  });

  test("should render movie description", () => {
    const { getByText } = render(<MovieCard movie={mockMovie} />);
    const descriptionElement = getByText("description");
    expect(descriptionElement).toBeInTheDocument();
  });

  test("should render movie release year", () => {
    const { getByText } = render(<MovieCard movie={mockMovie} />);
    const releaseYearElement = getByText("2016");
    expect(releaseYearElement).toBeInTheDocument();
  });
});
