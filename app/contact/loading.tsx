import React from "react";
import Projects from "../Projects";
import ContentWrap from "../ContentWrap";
import Link from "next/link";

function loading() {
  return (
    <ContentWrap>
      <div className="breadcrumbs [&>*]:transition-colors [&>*:hover]:text-lime-500 mb-4 text-sm  text-stone-400">
        <Link href={`/`}>Home</Link> / Contact
      </div>
      {/* 
// @ts-ignore */}
      <p>Loading...</p>
    </ContentWrap>
  );
}

export default loading;
