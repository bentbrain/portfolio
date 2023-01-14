import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  cover: string;
  description: string;
  slug: string;
};

function Project({ title, cover, description, slug }: Props) {
  return (
    <Link href={`/projects/${slug}`}>
      <div className="bg-white p-4 rounded-md shadow-md shadow-stone-200 overflow-hidden flex flex-col-reverse md:flex-col ">
        <div className="aspect-video relative object-cover object-top rounded-md border border-stone-100 md:mb-4">
          <Image
            src={cover}
            alt={`${title} Desktop Screenshot`}
            fill
            className="object-cover object-top"
          />
        </div>
        <div className="mb-4 md:mb-0">
          <h3 className="font-bold  text-stone-700 text-xl">{title}</h3>
          <p className="leading-5 text-stone-500">{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default Project;
