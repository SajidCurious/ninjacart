import { SanityClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "5isy1q92",
  dataset: "production",
  apiVersion: "2022-03-10",
  useCdn: true,
  token: process.env.SANITY_TOKEN,
});
