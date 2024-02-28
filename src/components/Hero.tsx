import Image from "next/image";
import SeeMoreLink from "./SeeMoreLink";

const Hero = () => {
  return (
    <div className="flex justify-center w-full p-8 pb-16 bg-main-purple border-b-2 border-lime-green">
      <div className="lg:max-w-6xl max-w-2xl w-full flex lg:flex-row flex-col justify-between lg:gap-24 gap-8">
        <div className="flex flex-col lg:text-left lg:items-start text-center items-center flex-1">
          <h1 className="text-h1-color xs:text-4xl xs:leading-[54px] text-3xl leading-[42px] font-bold pb-4">
            Veja o guia definitivo para conquistar seus objetivos como DEV em
            2022
          </h1>
          <span className="text-maintext-white xs:text-lg xs:leading-[27px] text-base leading-[23px] pb-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
            pariatur suscipit dicta quam dignissimos quisquam! Nostrum
            voluptatibus commodi temporibus vero ipsum iusto facilis quod facere
            sequi mollitia, suscipit sunt deleniti?
          </span>
          <SeeMoreLink className="lg2:flex lg:hidden md3:flex flex gap-2"/>
        </div>
        <div className="flex flex-1 flex-col gap-4 h-full lg:justify-start items-center lg:items-start">
          <Image
            alt="Image of code on a computer"
            width={672}
            height={346}
            src="/featured-image.png"
          />
          <SeeMoreLink className="lg2:hidden lg:flex hidden gap-2"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
