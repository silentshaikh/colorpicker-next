"use client";
import { ContextChild, ContextType } from '@/utils/type';
import React, { createContext, useContext, useEffect, useState } from 'react'

const ColorContext = createContext<ContextType|null>(null);

function Context({children}:ContextChild) {
  const [color,setColor] = useState<string>("");
  const [colorList,setColorList] = useState<string[]>([]);
  const [popOver,setPopOver] = useState(false);
  const generateColor = () => {
    const randNumForColr = Math.floor(Math.random()*16777215);
    const randColrCode = `#${randNumForColr.toString(16)}`;
    setColor(randColrCode);
    setColorList((prev) => ([...prev,randColrCode]))
  };
  useEffect(() => {
    for(let i=1; i<5; i++){
      generateColor();
    };
  },[]);

  //when user click the color will be copy
  const copyTheColor = (colorCode:string) => {
    navigator.clipboard.writeText(colorCode);
  }
  return(
    <>
      <ColorContext.Provider value={{color,colorList,copyTheColor,popOver,setPopOver}}>

      {children}
      </ColorContext.Provider>
    </>
  );
};
export default Context;

//custom hook
const useCustomHook = () => {
  const colorContext = useContext(ColorContext);
  if(!colorContext){
    throw new Error("useCustomHook must be used within a ColorContext.Provider");
  };
  return colorContext;
};
export {useCustomHook};