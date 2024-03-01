import { Fade as Hamburger } from "hamburger-react";
import { Dispatch, SetStateAction } from "react";
import HeaderOptions from "./HeaderOptions";
import OptionsType from "@/types/option";
import { motion } from "framer-motion";
import wrapperVariants from "@/styles/animation";

interface DropDownMenuProps {
  isSelected: string;
  onSetIsSelected: Dispatch<SetStateAction<string>>;
  isFunc: string;
  onSetIsFunc: (str: string) => void;
  isMenuOpen: boolean;
  onSetIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  options: OptionsType[];
}

const DropDownMenu = ({
  isSelected,
  onSetIsSelected,
  isFunc,
  onSetIsFunc,
  isMenuOpen,
  onSetIsMenuOpen,
  options,
}: DropDownMenuProps) => {

  function canOpen() {
    if (isFunc == "menu") {
      if (isMenuOpen) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }

  function handleOnToogle() {
    if (isFunc == "menu") {
      onSetIsFunc("")
      onSetIsMenuOpen(false)
    } else {
      onSetIsFunc("menu")
      onSetIsMenuOpen(true)
    }
  }

  return (
    <motion.div
      animate={canOpen() ? "open" : "closed"}
      className="sm:relative md3:hidden"
    >
      <div onClick={() => handleOnToogle()} className="flex rounded-[4px] bg-light-purple hover:bg-green-500 duration-300 items-center justify-center overflow-hidden">
        <Hamburger
          color="#F2E7FA"
          rounded
          size={20}
          toggled={canOpen()}
        />
      </div>
      <div
        className={`md3:hidden absolute sm:block flex w-full px-8 top-32 sm:top-[120%] left-0 sm:-translate-x-[528%]`}
      >
        <motion.ul
          initial={wrapperVariants.closed}
          style={{ originY: "top" }}
          variants={wrapperVariants}
          tabIndex={0}
          className="flex flex-col items-center w-full p-2  
          gap-2 rounded-lg bg-light-purple sm:w-[355px]"
        >
          {options.map((option, index) => (
            <HeaderOptions
              onSetIsSelected={onSetIsSelected}
              content={option.name}
              width={option.width}
              isSelected={isSelected}
              key={index}
            />
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
};

export default DropDownMenu;
