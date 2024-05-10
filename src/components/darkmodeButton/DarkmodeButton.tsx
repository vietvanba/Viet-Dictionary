import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
type DarkmodeButtonProps = {
  darkmode: boolean;
  setDarkMode: () => void;
};
export const DarkmodeButton: React.FC<DarkmodeButtonProps> = ({
  darkmode,
  setDarkMode,
}) => {
  return (
    <button
      className="rounded-full p-3 bg-neutral-900 text-neutral-100 dark:bg-neutral-100  dark:text-neutral-900"
      onClick={() => setDarkMode()}
    >
      {darkmode && (
        <IoSunny className="xl:text-3xl md:text-base lg:text-sm hover:animate-spin" />
      )}
      {!darkmode && (
        <IoMoon className="xl:text-3xl md:text-base lg:text-sm hover:animate-pulse" />
      )}
    </button>
  );
};
