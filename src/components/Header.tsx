"use client";

import HeaderOptions from "./HeaderOptions";
import OptionsType from "@/types/options";
import SearchBar from "./SearchBar";
import { useState } from "react";
import Image from "next/image";
import DropDownMenu from "./DropDownMenu";

const Header = () => {
  const [isSelected, setIsSelected] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const options: OptionsType[] = [
    { name: "Home", width: "w-16" },
    { name: "Sobre", width: "w-16" },
    { name: "Categorias", width: "w-[104px]" },
    { name: "Contato", width: "w-[79px]" },
  ];

  return (
    <header className="flex items-center justify-center pt-16 p-8 text-maintext-white bg-main-purple">
      <div className="flex sm:gap-0 gap-[60px] items-center rg:justify-evenly justify-between  w-full max-w-6xl">
        <Image
          className="pt-1"
          src="./logo.svg"
          width={160}
          height={36}
          alt="logo"
        />
        <ul className="md2:pl-4 lg:pl-8 pl-0 md2:flex gap-0 lg:gap-8 md3:gap-4 transition-all hidden">
          {options.map((option, index) => (
            <HeaderOptions
              key={index}
              content={option.name}
              width={option.width}
              isSelected={isSelected}
              onSetIsSelected={setIsSelected}
            />
          ))}
        </ul>
        <div className="flex gap-2 transition-all">
          <SearchBar />
          <DropDownMenu
            isSelected={isSelected}
            setIsSelected={setIsSelected}
            isMenuOpen={isMenuOpen}
            options={options}
            onSetIsMenuOpen={setIsMenuOpen}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
