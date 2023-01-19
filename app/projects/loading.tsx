import React from "react";
import Projects from "../Projects";
import ContentWrap from "../ContentWrap";
import Link from "next/link";

function Project() {
  return (
    <div
      className={`bg-lime-200 shadow-lime-300/80  hover:bg-lime-100  p-4 rounded-md transition-colors ease-in-out	duration-300	 shadow-md overflow-hidden flex flex-col-reverse md:flex-col group `}
    >
      <div className="aspect-video bg-lime-50 overflow-hidden relative  object-cover object-top rounded-md  md:mb-4"></div>
      <div className="mb-4 md:mb-0">
        <div className="min-h-[1.5rem] w-[calc(100%-1rem)] rounded bg-lime-400 mb-2"></div>
        <div className="min-h-[1rem] w-[calc(100%-2rem)] rounded bg-lime-300"></div>
      </div>
    </div>
  );
}

function loading() {
  return (
    <ContentWrap>
      <div className="breadcrumbs [&>*]:transition-colors [&>*:hover]:text-lime-500 mb-4 text-sm  text-stone-400">
        <Link href={`/`}>Home</Link> / Projects
      </div>
      <h2 className={` text-3xl sm:text-5xl font-bold text-stone-600`}>
        Projects
      </h2>
      <div className="grid py-4 md:py-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Project />
        <Project />
        <Project />
      </div>
    </ContentWrap>
  );
}

export default loading;
