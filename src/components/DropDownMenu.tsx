import { Fade as Hamburger } from 'hamburger-react'
import { Dispatch, SetStateAction } from "react";
import HeaderOptions from "./HeaderOptions";
import OptionsType from "@/types/options";
import { motion } from "framer-motion";

interface DropDownMenuProps {
  isSelected: string;
  setIsSelected: Dispatch<SetStateAction<string>>;
  isMenuOpen: boolean;
  options: OptionsType[];
  onSetIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const DropDownMenu = ({
  isSelected, 
  setIsSelected,
  isMenuOpen,
  onSetIsMenuOpen,
  options,
}: DropDownMenuProps) => {
  return (
    <motion.div
      animate={isMenuOpen ? "open" : "closed"}
      className="relative md3:hidden"
    >
      <div className="flex rounded-[4px] bg-light-purple items-center justify-center overflow-hidden">
        <Hamburger
          rounded
          size={20}
          toggle={onSetIsMenuOpen}
          toggled={isMenuOpen}
        />
      </div>

      <motion.ul
        initial={wrapperVariants.closed}
        variants={wrapperVariants}
        style={{ originY: "top", translateX: "-93.2%" }}
        className="flex flex-col items-center gap-2 p-2 rounded-lg bg-light-purple shadow-xl 
        absolute top-[120%] left-[50%] w-[355px] overflow-hidden tanslate-x-[50%]"
      >
        {
          options.map((option, index) => (
            <HeaderOptions
              onSetIsSelected={setIsSelected}
              content={option.name}
              width={option.width}
              isSelected={isSelected}
              key={index}
            />
          ))
        }
      </motion.ul>
    </motion.div>
  );
};

export default DropDownMenu;
