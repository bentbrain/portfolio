import React from "react";
import ContentWrap from "@/app/ContentWrap";
import { PortableText } from "@portabletext/react";
import { HiOutlineExternalLink } from "react-icons/hi";
import urlBuilder from "@sanity/image-url";
import client from "@/app/sanity-config";
import Image from "next/image";
import WindowWrap from "@/app/WindowWrap";
import Link from "next/link";

type PageProps = {
  params: {
    slug: string;
  };
};

type Project = {
  _createdAt: Date;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: Date;
  content: Content[];
  cover: Cover;
  description: string;
  images: any[];
  link: string;
  slug: Slug;
  technology: any[];
  title: string;
};

type Content = {
  _key: string;
  _type: string;
  children: Child[];
  markDefs: any[];
  style: string;
};

type Child = {
  _key: string;
  _type: string;
  marks: any[];
  text: string;
};

type Cover = {
  _type: string;
  asset: Asset;
};

type Asset = {
  _ref: string;
  _type: string;
};

type Slug = {
  _type: string;
  current: string;
};

const urlFor = (source: any) => urlBuilder(client).image(source);

const components = {
  types: {
    image: (props: any) => {
      const imageData = props.value;
      return (
        <div className="text-center !my-8  mx-auto ">
          <div
            className="relative rounded overflow-hidden mb-2 mx-auto max-w-[min(75ch,100%)] max-h-[40rem] shadow"
            style={{
              aspectRatio: `${imageData.asset._ref
                .match(/\d*x/i)[0]
                .replace("x", "")} / ${imageData.asset._ref
                .match(/x\d*/i)[0]
                .replace("x", "")} `,
              maxWidth: `min(${imageData.asset._ref
                .match(/\d*x/i)![0]
                .replace("x", "")}px,100%)`,
            }}
          >
            <Image alt={imageData.alt} fill src={urlFor(imageData).url()} />
          </div>
          <p className="text-sm text-stone-400">{imageData.alt}</p>
        </div>
      );
    },
  },
};

const FetchProject = async (slug: string): Promise<Project> => {
  const res = await fetch(
    `https://lmfdk0bu.api.sanity.io/v2023-01-14/data/query/production?query=*${encodeURIComponent(
      `[slug.current == "${slug}"]`
    )}`
  );
  const data = await res.json();
  return data.result[0];
};

async function ProjectPage({ params: { slug } }: PageProps) {
  const project = await FetchProject(slug);

  const coverString = project.cover.asset._ref;
  return (
    <ContentWrap width={`75ch`}>
      <div className="breadcrumbs [&>*]:transition-colors [&>*:hover]:text-lime-500 mb-4 text-sm text-center text-stone-400">
        <Link href={`/`}>Home</Link> / <Link href={`/projects`}>Projects</Link>{" "}
        / {project.title}
      </div>

      <>
        <h1 className="text-4xl mb-2 sm:text-5xl font-bold text-stone-600">
          {project.link ? (
            <a target="_blank" href={project.link}>
              {project.title}
              <HiOutlineExternalLink
                size={20}
                className="max-w-[0.5em] inline align-super"
              />
            </a>
          ) : (
            project.title
          )}
        </h1>

        <p className="mb-2">{project.description}</p>
        <div className="tech flex gap-1  mb-4 flex-wrap ">
          {project.technology.map((tech) => {
            return (
              <span className="bg-lime-200 text-sm md:text-base px-2 font-bold uppercase rounded-full text-lime-600">
                {tech}
              </span>
            );
          })}
        </div>

        <WindowWrap styles=" my-6">
          <div
            className="w-full relative"
            style={{
              aspectRatio: `${coverString
                .match(/\d*x/i)![0]
                .replace("x", "")} / ${coverString
                .match(/x\d*/i)![0]
                .replace("x", "")} `,
            }}
          >
            <Image
              fill
              alt={`${project.title}`}
              src={urlFor(project.cover).url()}
            />
          </div>
        </WindowWrap>
        <div className="content py-4 [&>*]:mb-2 [&>*]:max-w-[min(75ch,100%)] ">
          <PortableText components={components} value={project.content} />
        </div>
      </>
    </ContentWrap>
  );
}

export default ProjectPage;

export async function generateStaticParams() {
  const query = '[_type == "project"]{"slug": slug.current}';
  const res = await fetch(
    `https://lmfdk0bu.api.sanity.io/v2023-01-14/data/query/production?query=*${encodeURIComponent(
      query
    )}`
  );
  const data = await res.json();
  return data.result;
}
