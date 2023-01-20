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

const FetchProject = async (slug: string): Promise<Project> => {
  const res = await fetch(
    `https://lmfdk0bu.api.sanity.io/v2023-01-14/data/query/production?query=*${encodeURIComponent(
      `[slug.current == "${slug}"]`
    )}`
  );
  const data = await res.json();
  return data.result[0];
};

export default async function Head({ params }: { params: { slug: string } }) {
  const project = await FetchProject(params.slug);

  return (
    <>
      <title>{`Liam Cullen | ${project.title}`}</title>
      <link rel="icon" href="/favicon-lime.ico" />
      <meta name="description" content={project.description} />
    </>
  );
}
