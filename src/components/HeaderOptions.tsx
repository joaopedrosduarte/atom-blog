import { Dispatch, SetStateAction } from "react";

interface HeaderOptionsProps {
  isSelected: string;
  content: string;
  width: string;
  onSetIsSelected: Dispatch<SetStateAction<string>>;
}

const HeaderOptions = ({
  isSelected,
  content,
  onSetIsSelected,
  width,
}: HeaderOptionsProps) => {
  return (
    <li
      className={`${
        isSelected == content ? "md2:font-bold bg-main-purple" : ""
      } ${width} group text-lg transition-all align-middle w-full hover:bg-dark-purple justify-center rounded-md flex`}
      onClick={() => onSetIsSelected(content)}
    >
      <div className="w-0.5 h-full flex items-center">
        <div
          className={`${
            isSelected == content ? "md2:bg-lime-green group-hover:bg-transparent duration-200" : "md2:bg-transparent"
          } transition-all w-full h-[18px] duration-500`}
        />
      </div>
      <button
        className="pl-1 pr-1.5 md2:text-maintext-white md2:group-hover:text-lime-green text-maintext-white transition-colors duration-75"
      >
        {content}
      </button>
    </li>
  );
};

export default HeaderOptions;
