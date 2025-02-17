import ColorComp from "@/Components/ColorComp/ColorComp";
// import Image from "next/image";
import { Sofadi_One } from '@next/font/google';
// import {Popover, PopoverTrigger, PopoverContent} from "@nextui-org/react";
const SofadiOne = Sofadi_One({
  weight: '400', 
  subsets: ['latin'], 
  display: 'swap', 
});
export default function Home() {
  return (
   <>
   <section className="h-screen max-[1290px]:h-[110vh] max-[1024px]:h-screen max-[1032px]:h-[135vh] max-[912px]:h-screen max-[853px]:h-screen max-[800px]:h-[180vh] max-[768px]:h-[140vh] max-[430px]:h-[240vh] max-[390px]:h-[250vh] max-[375px]:h-[313vh] max-[360px]:h-[280vh]">

    <h1 className={`text-center text-4xl py-6 uppercase text-zinc-400 ${SofadiOne.className}`}>Color Picker</h1>
    <section className=" secolor flex  justify-center items-center flex-wrap ">
    <ColorComp/>
    </section>
   </section>
   </>
  );
}
