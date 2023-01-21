const fetchURL = process.env.FETCH_URL;

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

const FetchProject = async (slug: string): Promise<Project> => {
  const res = await fetch(
    `https://lmfdk0bu.api.sanity.io/v2023-01-14/data/query/production?query=*${encodeURIComponent(
      `[slug.current == "${slug}"]{title, slug{current}, cover{asset->}, description}`
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
      <meta
        property="og:image"
        content={`${fetchURL}api/og?title=${project.title}&description=${project.description}&image=${project.cover.asset.url}`}
      />
    </>
  );
}
