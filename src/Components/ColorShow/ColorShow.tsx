
import { Color } from '@/utils/type';
import React from 'react'

function ColorShow({color}:Color) {
  // const {color} = useCustomHook();
  return (
    <>
      <div className={` h-[200px] w-[200px] max-[490px]:w-[180px] max-[490px]:h-[170px] max-[420px]:h-[150px]  `} style={{backgroundColor:color,}}></div>
    </>
  );
};
export default ColorShow;