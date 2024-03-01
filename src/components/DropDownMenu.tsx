import { Fade as Hamburger } from "hamburger-react";
import { Dispatch, SetStateAction } from "react";
import HeaderOptions from "./HeaderOptions";
import OptionsType from "@/types/option";
import { motion } from "framer-motion";
import wrapperVariants from "@/styles/animation";

interface DropDownMenuProps {
  isSelected: string;
  setIsSelected: Dispatch<SetStateAction<string>>;
  isMenuOpen: boolean;
  options: OptionsType[];
  onSetIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

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
      className="sm:relative md3:hidden"
    >
      <div className="flex rounded-[4px] bg-light-purple hover:bg-green-500 duration-300 items-center justify-center overflow-hidden">
        <Hamburger
          color="#F2E7FA"
          rounded
          size={20}
          toggle={onSetIsMenuOpen}
          toggled={isMenuOpen}
        />
      </div>
      <div
        className={`md3:hidden absolute sm:block flex w-full px-8 top-32 sm:top-[120%] left-0 sm:-translate-x-[528%]`}
      >
        <motion.ul
          initial={wrapperVariants.closed}
          style={{ originY: "top" }}
          variants={wrapperVariants}
          className="flex flex-col items-center gap-2 p-2 
             w-full rounded-lg bg-light-purple sm:w-[355px]"
        >
          {options.map((option, index) => (
            <HeaderOptions
              onSetIsSelected={setIsSelected}
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
