import { create } from "zustand";
import { persist } from "zustand/middleware";
import { MovieStore } from "../lib/types";
import { movies } from "../lib/data";
import { refine } from "../lib/helpers";

export const useMovieStore = create<MovieStore>()(
  persist(
    (set) => ({
      allMovies: movies,
      customMovieList: [],
      filter: "",
      sort: "",
      filterYear: "",
      refine: (options) => set(refine(options)),
    }),
    { name: "streamingFy" },
  ),
);
