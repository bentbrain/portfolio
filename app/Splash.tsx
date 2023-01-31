import React from "react";
import WindowWrap from "./WindowWrap";
import Image from "next/image";
import Desktop from "../public/rockbusters-desktop.png";
import Mobile from "../public/rockbusters-mobile.png";

function Splash() {
  return (
    <div className="text-center py-8 md:py-0  md:min-h-[min(calc(100vh-100px),800px)]  flex flex-col items-center justify-center ">
      <h1 className="font-black text-4xl md:text-6xl mb-4">
        Design & Development
      </h1>
      <p className="text-xl mb-6">
        Using my creative experience to build fun things on the web.
      </p>
      <div className="grid grid-cols-12 grid-rows-6 gap-4 items-center max-w-[min(700px,100%)] ">
        <div className="col-start-1 col-end-11 row-start-2 row-end-6  sm:col-end-11 sm:row-start-1 sm:row-end-6 my-4">
          <WindowWrap>
            <Image priority src={Desktop} alt="Rockbusters App Desktop Image" />
            {/* <img src="/rockbusters-desktop.png" alt="" /> */}
          </WindowWrap>
        </div>
        <div className=" row-start-1 row-end-7 col-start-7 col-end-13 sm:col-start-9 sm:col-end-13 sm:row-start-2 sm:row-end-7">
          <WindowWrap>
            <Image priority src={Mobile} alt="Rockbusters App Mobile Image" />
            {/* <img
              src="/rockbusters-mobile.png"
              alt="Rockbusters App Mobile Image"
            /> */}
          </WindowWrap>
        </div>
      </div>
    </div>
  );
}

export default Splash;
