import LoadingComponent from "./LoadingComponent";
import ErrorComponent from "./ErrorComponent";
import usePosts from "@/hooks/usePosts";
import Post from "./Post";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/Carousel";
import NoPostsComponent from "./NoPostsComponent";

const Posts = () => {
  // Recebendo todas as funções e data do hook usePosts, como já mencionado.
  const { data, isLoading, isSuccess, isError } = usePosts();
  //carregando requisição.
  if (isLoading) return <LoadingComponent />;
  //condicional de erro na requisição
  if (isError) return <ErrorComponent />;
  //condicional de sucesso porém sem conteudo na response
  if (isSuccess && data.length == 0) return <NoPostsComponent />;
  //condicional de sucesso padrão
  if (isSuccess) {
    // Separando os posts para encaixar no layout
    const MainPost = data[0];
    const TwoSidePosts = [data[1], data[2]];
    const ThreeBottomPosts = [data[3], data[4], data[5]];

    return (
      <div className="flex w-full justify-center p-8">
        <div className="flex flex-col w-full max-w-6xl md2:gap-16 gap-24 items-center justify-center">
          <div className="flex md2:flex-row flex-col md2:w-full pt-[60px] md2:gap-32 gap-24 justify-between">
            <div className="block w-full max-w-[569px]">
              <Post
                id={MainPost.id}
                title={MainPost.title}
                description={MainPost.description}
                date={MainPost.date}
                image={MainPost.image}
              />
            </div>
            <div className="flex flex-col w-full md2:max-w-[470px] max-w-[569px]">
              {TwoSidePosts.map((post) => (
                <Post
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  description={post.description}
                  date={post.date}
                  image={post.image}
                />
              ))}
            </div>
          </div>
          <div className="md2:flex gap-8 pb-8 hidden">
            {ThreeBottomPosts.map((post) => (
              <Post
                key={post.id}
                id={post.id}
                title={post.title}
                description={post.description}
                date={post.date}
                image={post.image}
              />
            ))}
          </div>
          <div className="md2:hidden justify-center items-center flex pb-8 max-w-[569px]">
            <Carousel>
              <CarouselContent>
                {ThreeBottomPosts.map((post) => (
                  <CarouselItem key={post.id}>
                    <div className="flex items-center justify-between pt-0">
                      <Post
                        id={post.id}
                        title={post.title}
                        description={post.description}
                        date={post.date}
                        image={post.image}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
};

export default Posts;
