import Post from "./Post";

const Posts = () => {
  const posts = {
    data: [
      {
        id: 1,
        title: "Começando no ReactJS em 2022",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto quibusdam impedit itaque saepe quas commodi repudiandae eveniet minus placeat non expedita corrupti sed, officiis vitae sequi magnam. Dolorem, officiis nemo.",
        image: "/post-1.png",

        date: "Janeiro 04, 2022",
      },
      {
        id: 5,
        title:
          "Conheça as principais técnicas para conseguir uma vaga internacional em programação",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quas sit cum aspernatur saepe similique laboriosam quis iste, deserunt earum placeat repellat tempora culpa iusto voluptate mollitia. Qui, quo nesciunt.",
        image: "",
        date: "Janeiro 04, 2022",
      },
      {
        id: 6,
        title: "Veja a evolução do Front-end na prática",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae odio hic accusamus doloribus in ratione iste, ad amet nihil voluptatibus id nulla libero, numquam inventore dolores quibusdam sequi repellendus officia.",
        image: "",
        date: "Janeiro 04, 2022",
      },
      {
        id: 2,
        title: "Deixe seu código mais semântico com essas dicas",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolorem labore maiores harum porro at explicabo eligendi! Quis fugit, atque accusantium consequuntur aliquam quas a quasi odio perspiciatis illum impedit?",
        image: "/post-2.png",
        date: "Janeiro 04, 2022",
      },
      {
        id: 3,
        title: "Use essas dicas nas suas aplicações mobile",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ex eius quibusdam fugiat sit labore, at iure optio modi magnam eveniet voluptate soluta animi, magni saepe quaerat autem esse eum?",
        image: "/post-3.png",
        date: "Janeiro 04, 2022",
      },
      {
        id: 4,
        title: "10 dicas para conseguir a vaga desejada",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eos voluptatum maiores non nam aliquam nesciunt provident atque magni magnam corporis accusamus, enim veritatis nemo nisi alias cupiditate molestiae facilis.",
        image: "/post-4.png",
        date: "Janeiro 04, 2022",
      },
    ],
  };
  const MainPost = posts.data[0];
  const TwoSidePosts = [posts.data[1], posts.data[2]];
  const ThreeBottomPosts = [posts.data[3], posts.data[4], posts.data[5]];

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
          <div className="flex flex-col md2:max-w-[472px] max-w-[569px]">
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
