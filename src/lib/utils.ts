import { Movie, MovieStore, Options, SortBy, filterKind } from "../lib/types";

const filterArrayBy = (arr: Movie[], filterBy: filterKind, year: string) => {
  if (filterBy === "movie" || filterBy === "series") {
    return arr.filter(({ programType }) => programType === filterBy);
  }
  return arr.filter(({ releaseYear }) => releaseYear === Number.parseInt(year));
};

const sortArrayBy = (arr: Movie[], sortBy: SortBy) => {
  if (sortBy === "year_up") {
    return arr.sort((a, b) => a.releaseYear - b.releaseYear);
  }
  if (sortBy === "year_down") {
    return arr.sort((a, b) => b.releaseYear - a.releaseYear);
  }
  // default case: by title
  return arr.sort((a, b) => a.title.localeCompare(b.title));
};

export const refine = (options: Options) => (currentState: MovieStore) => {
  const { filter, sort, filterYear } = options;
  const { allMovies } = currentState;
  let customMovieList: Movie[];

  customMovieList = filterArrayBy(allMovies, filter, filterYear);

  customMovieList = sortArrayBy(customMovieList, sort);

  return { customMovieList, filter, filterYear, sort };
};
