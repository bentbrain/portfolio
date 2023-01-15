import React from "react";

type Props = {
  styles?: string;
  children: React.ReactNode;
};

function WindowWrap({ children, styles }: Props) {
  return (
    <div
      className={` ${styles} rounded overflow-hidden  shadow-md shadow-stone-300 `}
    >
      {/* <div className="w-full h-5 bg-blue-50 border-b border-stone-200 flex items-center gap-1 pl-2">
        <div className="w-1.5 aspect-square rounded-full bg-blue-400 shadow-sm"></div>
        <div className="w-1.5 aspect-square rounded-full bg-blue-400 shadow-sm"></div>
        <div className="w-1.5 aspect-square rounded-full bg-blue-400 shadow-sm"></div>
      </div> */}
      {children}
    </div>
  );
}

export default WindowWrap;
