import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import Modal from "./Modal";
import { useState } from "react";

export default function Filter() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className="flex cursor-pointer items-center gap-2 rounded-md px-2 hover:bg-indigo-900"
        onClick={() => setIsOpen(true)}
      >
        <span className="font-mono uppercase">Filter</span>
        <AdjustmentsHorizontalIcon className="h-6 w-6 " />
      </div>
      <Modal isOpen={isOpen} onCloseModal={() => setIsOpen(false)} />
    </>
  );
}
