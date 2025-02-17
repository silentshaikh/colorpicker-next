// import { useCustomHook } from "@/Context/Context";
import { Sofadi_One } from '@next/font/google';
const SofadiOne = Sofadi_One({
  weight: '400', 
  subsets: ['latin'], 
  display: 'swap', 
});
function Button() {
  // const {color} = useCustomHook()
  return (
    <>
     <button className={` font-bold ${SofadiOne.className}`} >Copy</button> 
    </>
  )
};
export default Button;