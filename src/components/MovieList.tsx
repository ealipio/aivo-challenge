import { Movie as MovieType } from "../lib/types";

export default function MovieList({ movies }: { movies: MovieType[] }) {
  return <div>{JSON.stringify(movies)}</div>;
}
