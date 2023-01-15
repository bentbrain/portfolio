import React from "react";
import Projects from "../Projects";
import ContentWrap from "../ContentWrap";
import Link from "next/link";

function ProjectsPage() {
  return (
    <ContentWrap>
      <div className="breadcrumbs [&>*]:transition-colors [&>*:hover]:text-lime-500 mb-4 text-sm text-center text-stone-400">
        <Link href={`/`}>Home</Link> / Projects
      </div>
      {/* 
// @ts-ignore */}
      <Projects />
    </ContentWrap>
  );
}

export default ProjectsPage;
