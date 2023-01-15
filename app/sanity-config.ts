const sanityClient = require("@sanity/client");

const token = process.env.SANITY_TOKEN;

const client = sanityClient({
  projectId: "lmfdk0bu",
  dataset: "production",
  apiVersion: "2023-01-15", // use current UTC date - see "specifying API version"!
  token: token, // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
});

export default client;
