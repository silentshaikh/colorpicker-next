import { useCustomHook } from "@/Context/Context"
import { Color } from "@/utils/type";

function ColorCode({color}:Color) {
  // const {color} = useCustomHook();
  return (
    <>
     <h3 className="text-zinc-400 font-bold py-1 text-1xl tracking-widest">{color}</h3> 
    </>
  );
};
export default ColorCode;