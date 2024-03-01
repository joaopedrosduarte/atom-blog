import wrapperVariants from "@/styles/animation";
import { motion } from "framer-motion";
import { Dispatch, FormEvent, RefObject, SetStateAction } from "react";

interface DropDownSearchBarProps {
  inputRef: RefObject<HTMLInputElement>;
  isSearchOpen: boolean;
  isFunc: string;
  searchValue: string;
  onSetSearchValue: Dispatch<SetStateAction<string>>;
  search: (searchValue: string) => void;
}

const DropDownSearchBar = ({
  inputRef,
  isSearchOpen,
  isFunc,
  search,
  searchValue,
  onSetSearchValue,
}: DropDownSearchBarProps) => {
  function handleOnSearch(e: FormEvent) {
    e.preventDefault();
    search(searchValue);
  }

  function canOpen() {
    if (isFunc == "search") {
      if (isSearchOpen) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }

  return (
    <motion.div
      animate={canOpen() ? "open" : "closed"}
      className={`${
        canOpen() ? "z-10" : ""
      } sm:hidden flex justify-between absolute w-full rounded-l-md translate-y-16 px-8 left-0`}
    >
      <motion.form
        initial={wrapperVariants.closed}
        style={{ originY: "top" }}
        variants={wrapperVariants}
        className="flex w-full"
        onSubmit={(e) => handleOnSearch(e)}
      >
        <input
          type="text"
          className="w-full pl-6 py-[12px] bg-dark-purple rounded-l-md outline-none"
          value={searchValue}
          ref={inputRef}
          placeholder="Buscar"
          onChange={(e) => onSetSearchValue(e.target.value)}
        />
        <div className="flex justify-center items-center p-2 bg-dark-purple max-w-28 w-full rounded-r-md">
          <button className=" bg-light-purple h-min w-16 ml-1 rounded-sm hover:bg-green-500 transition-color duration-300">
            Enter
          </button>
        </div>
      </motion.form>
    </motion.div>
  );
};

export default DropDownSearchBar;
