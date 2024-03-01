import Image from "next/image";

const LoadingComponent = () => {
  return (
    <div className="flex flex-col px-64 py-44 w-full items-center justify-between">
      <div className="gap-4 w-full flex flex-col items-center justify-between">
        <div className="flex animate-spin">
          <Image src={"/spinner.svg"} alt="Spinner" width={96} height={96} />
        </div>
        <span className="text-2xl font-bold text-slate-300 block w-46 text-center">
          Carregando Posts...
        </span>
      </div>
    </div>
  );
};

export default LoadingComponent;
