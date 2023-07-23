import { Movie as MovieType } from "../lib/types";

export default function MovieCard({ movie }: { movie: MovieType }) {
  return (
    <div className="mx-auto max-w-md overflow-hidden rounded-xl bg-indigo-200 shadow-md">
      <img
        className="h-48 w-full object-cover object-center"
        src={movie.images["Poster Art"].url}
        alt={movie.title}
        loading="lazy"
      />
      <div className="p-6">
        <h2 className="mb-2 line-clamp-1 text-xl font-semibold text-gray-800">{movie.title}</h2>
        <p className="w-max rounded-md bg-indigo-700 px-2 text-center uppercase text-white">{movie.programType}</p>
        <p className="mt-8 font-semibold uppercase text-gray-800">Summary:</p>
        <p className="mb-4 line-clamp-3 text-gray-600">{movie.description}</p>
        <p className="mt-8 font-mono font-semibold uppercase text-gray-500">{movie.releaseYear}</p>
      </div>
    </div>
  );
}
