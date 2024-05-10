import { AiOutlineSearch } from "react-icons/ai";

export const SearchBar = () => {
  return (
    <div className="flex justify-center items-center gap-5 ">
      <input
        type="text"
        className="w-1/3 h-10 p-5 rounded-3xl text-neutral-900"
        placeholder="Start typing any word or phrase"
      />
      <button className="bg-neutral-900 dark:bg-neutral-100 rounded-full p-3">
        <AiOutlineSearch className=" text-neutral-100 dark:text-neutral-900" />
      </button>
    </div>
  );
};
