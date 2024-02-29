import Image from "next/image";

const ErrorComponent = () => {
  return (
    <div className="flex flex-col px-64 py-44 w-full items-center justify-between">
      <div className="gap-4 w-full flex flex-col items-center justify-between">
        <Image src={"/error.svg"} alt="Spinner" width={96} height={96} />
        <span className="text-2xl font-bold text-slate-300 block w-46 text-center">Erro na requisição, Recarregue a pagina!</span>
      </div>
    </div>
  );
}

export default ErrorComponent;
