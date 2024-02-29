import Image from "next/image";

interface SeeMoreLinkProps {
  className: string;
}

const SeeMoreLink = ({ className }: SeeMoreLinkProps) => {
  return (
    <button
      className={`${className} group gap-1 px-2 hover:bg-dark-purple rounded-md transition-all bg-transparent items-center`}
    >
      <span className="text-h1-color font-bold xs:text-lg group-hover:text-lime-green transition-colors duration-300 text-base">
        Veja mais
      </span>
      <Image
        width={24}
        height={24}
        alt="Left arrow icon"
        src={"/arrow-left.svg"}
      />
    </button>
  );
};

export default SeeMoreLink;
