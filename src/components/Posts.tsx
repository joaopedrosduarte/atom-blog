import usePosts from "@/hooks/usePosts";
import Post from "./Post";

const Posts = () => {
  const { data, isLoading, isSuccess } = usePosts();

  if (isLoading) return <p>Loading...</p>;

  if (isSuccess && data!.length) return <p>No posts found</p>;

  if (isSuccess) {
    const MainPost = data[0];
    const TwoSidePosts = [data[1], data[2]];
    const ThreeBottomPosts = [data[3], data[4], data[5]];

    return (
      <div className="flex w-full justify-center p-8">
        <div className="flex flex-col w-full max-w-6xl md2:gap-16 gap-32  items-center justify-center">
          <div className="grid md2:grid-cols-2 grid-cols-1 grid-flow-row md2:w-full pt-[60px] md2:gap-32 gap-28 justify-between">
            <div className="block max-w-[569px]">
              <Post
                id={MainPost.id}
                title={MainPost.title}
                description={MainPost.description}
                date={MainPost.date}
                image={MainPost.image}
              />
            </div>
            <div className="flex flex-col md2:max-w-[470px] max-w-[569px]">
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
          <div className="flex overflow-y-scroll">
            <div className="flex flex-nowrap gap-8">
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
          </div>
        </div>
      </div>
    );
  }
};

export default Posts;

<div className="flex flex-col bg-white m-auto p-auto">
  <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
    <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 "></div>
  </div>
</div>;

{
  /* <style>
.hide-scroll-bar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.hide-scroll-bar::-webkit-scrollbar {
  display: none;
}
</style> */
}
