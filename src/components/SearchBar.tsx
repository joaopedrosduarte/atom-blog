import Image from "next/image";
import { useState } from "react";

const SearchBar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="sm:pl-0 flex rounded-[4px] justify-center w-full max-w-[300px]">
      <input
        className="sm:flex hidden w-max outline-none pl-6 pr-7 py-[10px] rounded-l-[4px] bg-dark-purple placeholder-auxiliartext-white"
        type="text"
        placeholder="Buscar"
      />
      <button onClick={() => setIsSearchOpen(true)} className="sm:px-[23px] px-3 rounded-[4px] sm:rounded-l-none sm:rounded-r-[4px] bg-light-purple overflow-hidden">
        <div className="flex w-6 h-6 items-center">
          <Image
            className="h-max object-cover"
            src="./search.svg"
            width={24}
            height={24}
            alt="search icon"
          />
        </div>
      </button>
    </div>
  );
};

export default SearchBar;
