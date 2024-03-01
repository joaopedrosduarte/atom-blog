"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import DropDownSerachBar from "./DropDownSearchBar";
import React from "react";

const SearchBar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  });

  function search(content: string) {
    console.log("searching: " + content);
    setSearchValue("");
    setIsSearchOpen(false);
  }

  function openSearchOnFocus() {
    setIsSearchOpen(true);
    inputRef.current?.focus();
  }

  return (
    <div className="sm:pl-0 flex rounded-[4px] justify-center w-full max-w-[300px]">
      <input
        className="sm:flex hidden w-max outline-none pl-6 pr-7 py-[10px] rounded-l-[4px] bg-dark-purple placeholder-auxiliartext-white"
        type="text"
        value={searchValue}
        placeholder="Buscar"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <DropDownSerachBar
        inputRef={inputRef}
        isSearchOpen={isSearchOpen}
        onSetIsSearchOpen={setIsSearchOpen}
        search={search}
        searchValue={searchValue}
        onSetSearchValue={setSearchValue}
      />
      <button
        onClick={
          windowWidth < 640
            ? () => openSearchOnFocus()
            : () => search(searchValue)
        }
        className="sm:px-[23px] px-3 rounded-[4px] sm:rounded-l-none sm:rounded-r-[4px] bg-light-purple transition-colors duration-300 hover:bg-green-500 overflow-hidden"
      >
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
