import React from "react";
import JobView from "./job";
import { Job } from "./types";
import ContentWrap from "../ContentWrap";
import Link from "next/link";

const fetchJobs = async () => {
  const query =
    '[_type == "job" ] | order(startDate desc) {title, achievements, company,  logo{asset->{url}}, description, period, skills}';
  const res = await fetch(
    `https://lmfdk0bu.api.sanity.io/v2023-01-14/data/query/production?query=*${encodeURIComponent(
      query
    )}`
  );
  const data = await res.json();

  return data.result;
};

async function Resume() {
  const jobs = await fetchJobs();

  return (
    <ContentWrap>
      <div className="breadcrumbs [&>*]:transition-colors [&>*:hover]:text-lime-500 mb-4 text-sm  text-stone-400">
        <Link href={`/`}>Home</Link> / Resume
      </div>

      <h2 className=" text-3xl sm:text-5xl font-bold text-stone-600 mb-3">
        Experience
      </h2>
      <div className="flex flex-col items-start justify-start gap-6 text-stone-600">
        {jobs.map((job: Job) => {
          return (
            /*
          // @ts-ignore */
            <JobView key={job.description} job={job} />
          );
        })}
        <div className="w-full">
          <h2 className=" text-3xl sm:text-5xl font-bold text-stone-600 mb-3">
            Education
          </h2>
          <div className="bg-stone-50 rounded-md p-4 shadow w-full md:flex md:justify-between md:flex-row-reverse">
            <img
              src="/swinburne.svg"
              alt="Swinburne University Logo"
              className=" mb-3 max-h-12 sm:max-w-20 sm:max-h-20 md:mb-2"
            />
            <div>
              <h2 className="font-bold text-2xl sm:text-3xl">
                Bachelor of Design
              </h2>
              <p>
                <span className="font-bold">Communication Design</span>,
                Swinburne University of Technology – 2020
              </p>
              <p className="italic">
                Winner of the Swinburne Excellence in Design Award
              </p>
            </div>
          </div>
        </div>
      </div>
    </ContentWrap>
  );
}

export default Resume;
