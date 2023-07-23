import Filter from "./Filter";

export default function Header() {
  return (
    <header className="sticky top-0 flex justify-between bg-indigo-700 p-4 text-white shadow-md shadow-slate-900">
      <div className="text-2xl font-bold">
        <a href="/">StreamingFly</a>
      </div>
      <Filter />
    </header>
  );
}
