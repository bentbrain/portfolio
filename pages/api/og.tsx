import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

type Props = {
  featured?: boolean;
};

type Project = {
  cover: Cover;
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

const font = fetch(
  new URL("../../assets/Figtree-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const fetchProjects = async () => {
  const query = '[_type == "project" ] | order(order desc) { cover{asset->}}';
  const res = await fetch(
    `https://lmfdk0bu.api.sanity.io/v2023-01-14/data/query/production?query=*${encodeURIComponent(
      query
    )}`
  );
  const data = await res.json();

  return data.result;
};

export default async function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    // ?title=<title>
    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "Digital Designer & Web Developer";

    const hasDescription = searchParams.has("description");
    const description = hasDescription
      ? searchParams.get("description")?.slice(0, 100)
      : "Digital Designer & Web Developer";

    const hasImage = searchParams.has("image");
    const image = hasImage ? searchParams.get("image") : hasImage;

    const fontData = await font;

    const projects = image ? [""] : await fetchProjects();

    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            gap: "1rem",
            width: "100%",
            height: "100%",
            padding: "4rem",
            alignItems: "center",
            background: "#f5f5f4",
            color: "#57534e",
          }}
        >
          <div
            style={{
              width: "50%",
              display: "flex",
              textAlign: "left",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                fontFamily: "Figtree",
                fontSize: 95,
                fontWeight: 900,
                margin: 0,
              }}
            >
              Liam Cullen
            </p>
            <p
              style={{
                fontFamily: "Figtree",
                fontSize: hasTitle ? 37 : 30,
                margin: 0,
                marginBottom: 5,
                fontWeight: 700,
                color: "#78716c",
              }}
            >
              {title}
            </p>
            {hasDescription && (
              <p
                style={{
                  fontFamily: "Figtree",
                  fontWeight: 400,
                  fontSize: 24,
                  margin: 0,
                  color: "#a8a29e",
                }}
              >
                {description}
              </p>
            )}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "auto",
              marginBottom: "auto",
              width: "50%",
            }}
          >
            <div
              style={{
                display: "flex",
                width: image ? "100%" : 4 * 90,
                height: image ? "100%" : 3 * 90,
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                padding: image ? "1rem" : 0,
              }}
            >
              {image ? (
                <img
                  src={image}
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                    boxShadow:
                      "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                  }}
                />
              ) : (
                projects.map((project: Project, i: number) => {
                  return (
                    <img
                      src={project.cover.asset.url}
                      style={{
                        position: "absolute",
                        inset: "0",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "top",
                        borderRadius: "8px",
                        boxShadow:
                          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                        transform: `translateX(-${
                          i * (200 / projects.length)
                        }px) skew(0deg, 15deg) `,
                      }}
                    />
                  );
                })
              )}
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 600,
        fonts: [
          {
            name: "Figtree",
            data: fontData,
            style: "normal",
          },
        ],
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
