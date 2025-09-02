import { ArrowLeft, Cog, House } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Servicos() {
  const navigate = useNavigate();

  function homePage() {
    navigate("/");
  }
  
  return (
    <>
      <div className="fixed top-0 left-0 flex bg-colorFundo justify-between w-full px-8 py-5">
        <button onClick={homePage} type="button" className="text-textColor flex gap-2" >
          <ArrowLeft className="size-6" />
          <House className="size-6" />
        </button>
        <div className="text-textColor">
          <Cog className="size-7" />
        </div>
      </div>
      <div className="bg-fundoBg fundo bg-no-repeat bg-top flex flex-wrap mt-20 justify-center gap-5">
        <div className="bg-buttonColor opacity-20 w-96 h-72 rounded-lg flex items-center justify-center">

        </div>
        <div className="bg-buttonColor opacity-20 w-96 h-72 rounded-lg flex items-center justify-center">

        </div>
        <div className="bg-buttonColor opacity-20 w-96 h-72 rounded-lg flex items-center justify-center">

        </div>
        <div className="bg-buttonColor opacity-20 w-96 h-72 rounded-lg flex items-center justify-center">

        </div>
        <div className="bg-buttonColor opacity-20 w-96 h-72 rounded-lg flex items-center justify-center">

        </div>
      </div>
    </>
  );
}