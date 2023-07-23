import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Movie, Options } from "../lib/types";
import { movies } from "../lib/data";

interface MovieStore {
  allMovies: Movie[];
  customMovieList: Movie[];
  filter: string;
  sort: string;
  filterYear: string;
  filterAndSort: (options: Options) => void;
}

export const useMovieStore = create<MovieStore>()(
  persist(
    (set) => ({
      allMovies: movies,
      customMovieList: [],
      filter: "",
      sort: "",
      filterYear: "",
      filterAndSort: ({ filter, filterYear, sort }) =>
        set((currentState) => {
          // todo
          return { currentState, filter, filterYear, sort };
        }),
    }),
    { name: "streamingFy" },
  ),
);
