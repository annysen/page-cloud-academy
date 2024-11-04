import { useRouteError } from "react-router-dom";
import sad from "../assets/sad.svg";

const Error = () => {
  const { error, status } = useRouteError();
  console.log(error.message, status);

  return (
    <div className="flex flex-col justify-center items-center h-lvh">
      <img className="w-1/12" src={sad} alt="" />
      <h1 className="text-xl md:text-5xl font-bold">{error?.message}</h1>
      <h1 className="my-5 text-lg md:text-3xl">Page Not Found: {status}</h1>
      <button
        onClick={() => window.history.back()}
        className="btn-primary pt-5"
      >
        Back
      </button>
    </div>
  );
};

export default Error;
