//Context Children Type
export interface ContextChild {
    children: React.ReactNode;
};

//Context type
export interface ContextType{
    color:string;
    colorList:string[];
    copyTheColor:(e:string) => void;
    popOver:boolean;
    setPopOver:(e:boolean) => void;
};
export interface Color{
    color:string;
}