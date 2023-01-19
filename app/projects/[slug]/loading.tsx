import React from "react";
import ContentWrap from "@/app/ContentWrap";

import Link from "next/link";

async function loading() {
  return (
    <ContentWrap width={`75ch`}>
      <div className="breadcrumbs [&>*]:transition-colors [&>*:hover]:text-lime-500 mb-4 text-sm  text-stone-400">
        <Link href={`/`}>Home</Link> / <Link href={`/projects`}>Projects</Link>{" "}
        /
      </div>
      <h1 className="text-4xl mb-2 sm:text-5xl font-bold text-stone-600">
        Loading...
      </h1>
    </ContentWrap>
  );
}

export default loading;
