"use client";
import ColorShow from '../ColorShow/ColorShow'
import Button from '../Button/Button';
import ColorCode from '../ColorCode/ColorCode';
import { Poppins } from '@next/font/google';
import { useCustomHook } from '@/Context/Context';
// import {Popover, PopoverTrigger, PopoverContent} from "@nextui-org/react";
const poppin = Poppins({
  weight: ['400', '700'], 
  subsets: ['latin'], 
  display: 'swap', 
});
function ColorComp() {
  const {colorList,copyTheColor} = useCustomHook();
  return (
    <>
    
     {colorList.map((e,i) => {
      return(
      <div key={i} className={`cont flex justify-center items-center flex-col cursor-pointer w-[250px] py-2 mx-1 my-3  rounded-md ${poppin.className} max-[800px]:w-[300px] max-[430px]:w-[300px] max-[320px]:w-[250px] max-[658px]:w-[230px] max-[490px]:w-[200px] `} onClick={() => copyTheColor(e)}>
       <>
       <ColorShow color={e}/>
        <ColorCode color={e}/>
        <Button/>  
       </> 
        </div>

         );
     })}
    </>
  );
};
export default ColorComp;