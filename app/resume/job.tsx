import React from "react";
import { Job } from "./types";
import { PortableText } from "@portabletext/react";
type Props = {
  job: Job;
};

async function JobView({ job }: Props) {
  return (
    <div className="bg-stone-50 rounded-md p-4 shadow">
      <div className=" sm:flex sm:flex-row-reverse justify-between">
        <img
          className=" max-w-10 max-h-6 mb-3 md:max-w-16 md:max-h-8 md:mb-2 "
          src={job.logo.asset.url}
          alt={`${job.company} Logo`}
        />
        <h2 className="font-bold text-2xl sm:text-3xl">{job.title}</h2>
      </div>
      <p className="mb-3">
        <span className="font-bold">{job.company}</span>, {job.period}
      </p>
      <div className="wrap md:grid md:grid-cols-3 md:gap-4">
        <div className="content md:col-start-1 md:col-end-3 ">
          <div className="flex flex-wrap gap-1">
            {job.skills.map((skill, i) => (
              <p
                className="rounded-full bg-lime-100 text-lime-700 px-3 py-1"
                key={`${skill}=${i}`}
              >
                {skill}
              </p>
            ))}
          </div>
          <div className="my-4  [&>p:not(last-of-type)]:mb-2">
            <PortableText value={job.description} />
          </div>
        </div>
        <div className="bg-lime-100 [&>p:not(last-of-type)]:mb-1 text-lime-700 py-2 px-3 text-sm h-min md:p-4">
          <h3 className="font-bold">Achievements:</h3>
          <PortableText value={job.achievements} />
        </div>
      </div>
    </div>
  );
}

export default JobView;
