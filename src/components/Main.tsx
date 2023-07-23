import MovieList from "./MovieList";

import { movies } from "../lib/data";
import { useMovieStore } from "../store/movieStore";

export default function Main() {
  const customMovieList = useMovieStore((state) => state.customMovieList);
  const { filterYear } = useMovieStore((state) => state);

  return (
    <main className="mx-auto max-w-full flex-grow p-8 sm:max-w-xl md:max-w-3xl lg:max-w-6xl">
      <div className="container mx-auto">
        {filterYear ? <MovieList movies={customMovieList} /> : <MovieList movies={movies} />}
      </div>
    </main>
  );
}
