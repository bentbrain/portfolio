import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  cover: string;
  description: string;
  slug: string;
  featured?: boolean;
};

function Project({ title, cover, description, slug, featured }: Props) {
  return (
    <Link href={`/projects/${slug}`}>
      <div
        className={`${
          featured
            ? "bg-lime-200 shadow-lime-100 hover:bg-lime-100 "
            : "bg-stone-50 shadow-stone-200 hover:bg-white "
        } p-4 rounded-md transition-colors shadow-md overflow-hidden flex flex-col-reverse md:flex-col group `}
      >
        <div className="aspect-video overflow-hidden relative  object-cover object-top rounded-md border border-stone-100 md:mb-4">
          <Image
            src={cover}
            alt={`${title} Desktop Screenshot`}
            fill
            className="object-cover group-hover:scale-105 transition-transform object-top"
          />
        </div>
        <div className="mb-4 md:mb-0">
          <h3
            className={`font-bold  ${
              featured ? "text-lime-700" : "text-stone-700"
            } text-xl`}
          >
            {title}
          </h3>
          <p
            className={`leading-5 ${
              featured ? "text-lime-600" : "text-stone-500"
            }`}
          >
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Project;
