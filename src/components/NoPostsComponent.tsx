import Image from "next/image";

const NoPostsComponent = () => {
  return (
    <div className="flex flex-col px-auto py-44 w-full items-center justify-between">
      <div className="gap-4 w-full flex flex-col items-center justify-between">
        <Image src={"/broom.svg"} alt="Spinner" width={96} height={96} />
        <span className="text-2xl font-bold text-slate-300 block w-46 text-center">
          Nenhum post disponível no momento.
        </span>
      </div>
    </div>
  );
};

export default NoPostsComponent;
