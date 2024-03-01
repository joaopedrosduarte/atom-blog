"use client";

import { useEffect, useRef, useState, KeyboardEvent } from "react";
import DropDownSearchBar from "./DropDownSearchBar";
import Image from "next/image";
import { toast } from "sonner";

interface SearchBarProps {
  isFunc: string;
  onSetIsFunc: (str: string) => void;
}

const SearchBar = ({ isFunc, onSetIsFunc }: SearchBarProps) => {
  const [windowWidth, setWindowWidth] = useState(1920);
  const [lock, setLock] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!lock) {
      setWindowWidth(window.innerWidth);
      setLock(true);
    }
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, [lock]);

  function search(content: string) {
    if (content.trim().length == 0) {
      inputRef.current?.blur();
      toast.warning("Porfavor, digite alguma coisa para pesquisar.");
      setSearchValue("");
    } else {
      setIsSearchOpen(false);
      inputRef.current?.blur();
      toast.success("Searching: " + content);
      setSearchValue("");
    }
  }

  function openSearchOnFocus() {
    if (isFunc == "search") {
      if (!isSearchOpen) {
        setIsSearchOpen(true);
        onSetIsFunc("search");
        inputRef.current?.focus();
      } else {
        onSetIsFunc("");
        setIsSearchOpen(false);
      }
    } else {
      setIsSearchOpen(true);
      onSetIsFunc("search");
      inputRef.current?.focus();
    }
  }

  function handleEnterKey(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      search(searchValue);
    }
  }

  return (
    <div className="sm:pl-0 flex rounded-[4px] justify-center w-full max-w-[300px]">
      <input
        className="sm:flex hidden w-max outline-none pl-6 pr-7 py-[10px] rounded-l-[4px] bg-dark-purple placeholder-auxiliartext-white"
        type="text"
        value={searchValue}
        placeholder="Buscar"
        onKeyDown={(e) => handleEnterKey(e)}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <DropDownSearchBar
        inputRef={inputRef}
        isFunc={isFunc}
        isSearchOpen={isSearchOpen}
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
