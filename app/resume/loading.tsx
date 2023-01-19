import React from "react";
import JobView from "./job";
import { Job } from "./types";
import ContentWrap from "../ContentWrap";
import Link from "next/link";

async function Resume() {
  const jobs = [1, 2, 3, 4];

  return (
    <ContentWrap>
      <div className="breadcrumbs [&>*]:transition-colors [&>*:hover]:text-lime-500 mb-4 text-sm  text-stone-400">
        <Link href={`/`}>Home</Link> / Resume
      </div>

      <h2 className=" text-3xl sm:text-5xl font-bold text-stone-600 mb-3">
        Experience
      </h2>
      <div className="flex flex-col items-start justify-start gap-6 text-stone-600">
        {jobs.map((job, i) => {
          return (
            <div
              className={`min-h-[20rem] bg-stone-50 rounded-md p-4 shadow w-full`}
              style={{
                opacity: 1.1 - i / 2,
              }}
            >
              <div className="min-h-[2rem] bg-stone-200 max-w-[20rem] rounded"></div>
            </div>
          );
        })}
      </div>
    </ContentWrap>
  );
}

export default Resume;
