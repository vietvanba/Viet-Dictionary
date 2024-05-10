import { AiOutlineUser } from "react-icons/ai";
export const Navbar = () => {
  return (
    <div className="grid grid-cols-12 h-full dark:text-neutral-100 text-neutral-900">
      <div className="col-span-2 flex justify-center items-center gap-5">
        {localStorage.getItem("mode") === "dark" ? (
          <img className="w-12 h-12" src="logo-darkmode.png" alt="" />
        ) : (
          <img className="w-12 h-12" src="logo-lightmode.png" alt="" />
        )}
        <div className="flex flex-col font-semibold items-center">
          <div className="text-lg">Dictionary</div>
          <div className="text-xs">vanbaviet.com</div>
        </div>
      </div>

      <div className="list-menu col-span-8 flex items-center justify-center gap-5">
        <div className="text-4xl font-bold">Dictionary</div>
      </div>
      <div className="col-span-1"></div>

      <div className="col-span-1 flex justify-center items-center">
        <AiOutlineUser className="text-3xl" />
      </div>
    </div>
  );
};
