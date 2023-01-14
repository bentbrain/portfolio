import React from "react";
import Project from "./Project";

type Project = {
  cover: Cover;
  description: string;
  slug: Slug;
  title: string;
};

type Cover = {
  asset: Asset;
};

type Asset = {
  _createdAt: Date;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: Date;
  assetId: string;
  extension: string;
  metadata: Metadata;
  mimeType: string;
  originalFilename: string;
  path: string;
  sha1hash: string;
  size: number;
  uploadId: string;
  url: string;
};

type Metadata = {};

type Slug = {
  current: string;
};

const fetchProjects = async () => {
  const query =
    '[_type == "project"]{title, slug{current}, cover{asset->}, description}';
  const res = await fetch(
    `https://lmfdk0bu.api.sanity.io/v2023-01-14/data/query/production?query=*${encodeURIComponent(
      query
    )}`
  );
  const data = await res.json();

  console.log(data);

  return data.result;
};

async function Projects() {
  const projects = await fetchProjects();

  return (
    <div>
      <h2 className="text-5xl font-bold">Projects:</h2>
      <div className="grid py-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project: Project) => {
          return (
            <Project
              key={project.slug.current}
              title={project.title}
              description={project.description}
              cover={project.cover.asset.url}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
