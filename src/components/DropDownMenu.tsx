import { Fade as Hamburger } from "hamburger-react";
import { Dispatch, SetStateAction } from "react";
import HeaderOptions from "./HeaderOptions";
import OptionsType from "@/types/option";
import { motion } from "framer-motion";
import wrapperVariants from "@/styles/animation";

interface DropDownMenuProps {
  ulRef: React.RefObject<HTMLUListElement>;
  isSelected: string;
  onSetIsSelected: Dispatch<SetStateAction<string>>;
  isMenuOpen: boolean;
  onSetIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  options: OptionsType[];
}

const DropDownMenu = ({
  ulRef,
  isSelected,
  onSetIsSelected,
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
          onToggle={() => ulRef.current?.focus()}
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
          ref={ulRef}
          tabIndex={0}
          className="flex flex-col items-center w-full p-2  
          gap-2 rounded-lg bg-light-purple sm:w-[355px]"
          onBlur={() => onSetIsMenuOpen(false)}
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
