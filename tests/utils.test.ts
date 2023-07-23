import { filterArrayBy, sortArrayBy } from "../src/lib/helpers";

const mockMovies = [
  {
    title: "Significant Mother",
    description: "...",
    programType: "series",
    images: {
      "Poster Art": {
        url: "https://...",
        width: 1000,
        height: 1500,
      },
    },
    releaseYear: 2015,
  },
  {
    title: "Under The Gun",
    description: "...",
    programType: "movie",
    images: {
      "Poster Art": {
        url: "https://...",
        width: 1000,
        height: 1500,
      },
    },
    releaseYear: 2016,
  },
];

describe("filterArrayBy Function", () => {
  test("should filter movies by programType", () => {
    const filteredMovies = filterArrayBy(mockMovies, "movie", "2016");
    expect(filteredMovies).toHaveLength(1);
    expect(filteredMovies[0].programType).toBe("movie");
    expect(filteredMovies[0].title).toBe("Under The Gun");
  });

  test("should filter movies by releaseYear", () => {
    const filteredMovies = filterArrayBy(mockMovies, "year", "2016");
    expect(filteredMovies).toHaveLength(1);
    expect(filteredMovies[0].releaseYear).toBe(2016);
  });

  test("should return empty array if nothing match", () => {
    const filteredMovies = filterArrayBy(mockMovies, "year", "2022");
    expect(filteredMovies).toHaveLength(0);
  });
});

describe("sortArrayBy Function", () => {
  test("should sort movies by releaseYear in ascending order", () => {
    const sortedMovies = sortArrayBy(mockMovies, "year_up");
    expect(sortedMovies).toHaveLength(2);
    expect(sortedMovies[0].releaseYear).toBe(2015);
    expect(sortedMovies[1].releaseYear).toBe(2016);
  });

  it("should sort movies by releaseYear in descending order", () => {
    const sortedMovies = sortArrayBy(mockMovies, "year_down");
    expect(sortedMovies).toHaveLength(2);
    expect(sortedMovies[0].releaseYear).toBe(2016);
    expect(sortedMovies[1].releaseYear).toBe(2015);
  });

  it.skip("should sort movies by title if invalid SortBy is provided", () => {
    const sortedMovies = sortArrayBy(mockMovies, "");
    expect(sortedMovies).toEqual(mockMovies);
  });
});
