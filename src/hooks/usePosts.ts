import GetMethods from "@/db/GetMethods";
import PostType from "@/types/post";
import { useQuery } from "react-query";

const usePosts = () => {
  // Retornando a propria função para ter acesso a quaisquer benefício
  // que o react-query oferece atranvés da desestruturação dos props.
  return useQuery({
    queryFn: async () => {
      const { data } = await GetMethods.GetPosts();
      return data as PostType[];
    },
  });
};

export default usePosts;
