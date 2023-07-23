import { HeartIcon } from "@heroicons/react/20/solid";

export default function Footer() {
  return (
    <footer className="flex justify-center bg-zinc-900 p-4 italic tracking-wider text-white antialiased">
      <span className="mr-1">Made with</span>
      <HeartIcon className="h-6 w-6  text-pink-600" />
      <span className="ml-2">By Eisson</span>
    </footer>
  );
}
