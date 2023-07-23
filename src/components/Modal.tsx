import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useMovieStore } from "../store/movieStore";
import { Options } from "../lib/types";

export default function Modal({ isOpen, onCloseModal }: { isOpen: boolean; onCloseModal: () => void }) {
  const filterAndSort = useMovieStore((state) => state.filterAndSort);
  const { filter, sort, filterYear } = useMovieStore((state) => state);
  const [formData, setFormData] = useState<Options>({ filter, sort, filterYear });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    filterAndSort(formData);
    onCloseModal();
  };

  const isDisabled = () => (formData.filter === "year" && !formData.filterYear) || !formData.filter || !formData.sort;
  return (
    <div
      className={`${isOpen ? "fixed" : "hidden"} inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm`}
    >
      <div className="min-w-[200px] max-w-xl rounded-md bg-gray-100 p-4 text-black shadow-lg ring-1 ring-black">
        <div className=" inset-4 flex flex-row-reverse">
          <XMarkIcon className="h-6 w-6 cursor-pointer text-gray-500 hover:text-black" onClick={() => onCloseModal()} />
        </div>
        <form className="my-5 flex flex-col items-center justify-center" onSubmit={handleSubmit}>
          <h2 className="text-xl font-semibold">Filter:</h2>
          <p>
            <select name="filter" value={formData.filter} onChange={handleChange} className="w-28 text-black">
              <option value="" disabled className=""></option>
              <option value="year">Year</option>
              <option value="series">Series</option>
              <option value="movie">Movie</option>
            </select>
          </p>

          {formData.filter === "year" && (
            <>
              <input
                className="mt-2 w-28 text-black transition-all duration-200"
                type="number"
                min={1900}
                name="filterYear"
                value={formData.filterYear}
                placeholder="2022"
                onChange={handleChange}
              />
            </>
          )}

          <h2 className="mt-4 text-xl font-semibold">Sort:</h2>
          <p>
            <select value={formData.sort} name="sort" onChange={handleChange} className="w-28 text-black">
              <option value="" disabled></option>
              <option value="title">Title</option>
              <option value="year_up">Year(&#8593;)</option>
              <option value="year_down">Year(&#8595;)</option>
            </select>
          </p>
          <p className="mt-8">
            <button
              type="submit"
              disabled={isDisabled()}
              className="rounded-md border bg-indigo-600 px-8  py-2  font-bold text-white hover:bg-indigo-700 focus:bg-indigo-800 disabled:bg-gray-400"
            >
              Apply
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
