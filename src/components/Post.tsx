import PostType from "@/types/post";
import Image from "next/image";

const Post = ({ id, title, description, date, image }: PostType) => {
  return (
    <div className={`${image == "" ? "gap-2 first:pb-6 last:pt-6 first:border-b-2" : "gap-4"} flex flex-col w-full`}>
      {
        image == "" ? null : 
        <Image src={image} width={569} height={342} alt={`Post ${id} image`} />
      }
      <p className="text-base font-normal leading-[18.75px]">{date}</p>
      <h2 className="text-h2-color font-bold text-2xl leading-9">{title}</h2>
      <p className="text-base font-normal leading-6">
        {description}
      </p>
    </div>
  );
}

export default Post;

