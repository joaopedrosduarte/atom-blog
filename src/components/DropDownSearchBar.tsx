import wrapperVariants from "@/styles/animation";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

interface DropDownSearchBarProps {
  inputRef: React.RefObject<HTMLInputElement>;
  isSearchOpen: boolean;
  onSetIsSearchOpen: Dispatch<SetStateAction<boolean>>;
  searchValue: string;
  onSetSearchValue: Dispatch<SetStateAction<string>>;
  search: (searchValue: string) => void;
}

const DropDownSerachBar = ({
  inputRef,
  isSearchOpen,
  onSetIsSearchOpen,
  search,
  searchValue,
  onSetSearchValue,
}: DropDownSearchBarProps) => {
  return (
    <motion.div
      animate={isSearchOpen ? "open" : "closed"}
      className={`${
        isSearchOpen ? "z-10" : ""
      } sm:hidden flex justify-between absolute w-full rounded-l-md translate-y-16 px-8 left-0`}
    >
      <motion.div
        initial={wrapperVariants.closed}
        style={{ originY: "top" }}
        variants={wrapperVariants}
        className="flex w-full"
      >
        <input
          type="text"
          ref={inputRef}
          className="w-full pl-6 py-[12px] bg-dark-purple rounded-l-md outline-none"
          value={searchValue}
          placeholder="Buscar"
          onBlur={() => onSetIsSearchOpen(false)}
          onChange={(e) => onSetSearchValue(e.target.value)}
        />
        <div className="flex justify-center items-center p-2 bg-dark-purple max-w-28 w-full rounded-r-md">
          <button
            className=" bg-light-purple h-min w-16 ml-1 rounded-sm hover:bg-green-500 transition-color duration-300"
            onClick={() => search(searchValue)}
          >
            Ir
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DropDownSerachBar;
