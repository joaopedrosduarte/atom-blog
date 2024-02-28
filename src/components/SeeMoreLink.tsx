import Image from "next/image";

interface SeeMoreLinkProps {
  className: string;
}

const SeeMoreLink = ({ className }:SeeMoreLinkProps ) => {
  return (
    <div className={className} >
      <span className="text-h1-color font-bold xs:text-lg text-base">Veja mais</span>
      <Image
        width={24}
        height={24}
        alt="Left arrow icon"
        src={"/arrow-left.svg"}
      />
    </div>
  );
}

export default SeeMoreLink;

<button className="lg2:flex lg:hidden md3:flex flex gap-2">
            <span className="text-h1-color font-bold xs:text-lg text-base">Veja mais</span>
            <Image
              width={24}
              height={24}
              alt="Left arrow icon"
              src={"/arrow-left.svg"}
              className="object-contain"
            />
          </button>