export type Poster = {
  url: string;
  width: number;
  height: number;
};

export type Image = {
  "Poster Art": Poster;
};

export type Movie = {
  title: string;
  description: string;
  programType: string;
  images: Image;
  releaseYear: number;
};

export type filterKind = "" | "year" | "series" | "movie";
export type SortBy = "" | "title" | "year_down" | "year_up";

export type Options = {
  filter: filterKind;
  filterYear: string;
  sort: SortBy;
};
