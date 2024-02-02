import { createClient, groq } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn: false,
})

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => {
  return builder.image(source);
};

export const productQuery = groq`*[_type == 'product']{
  ...
} | order(_createdAt desc)`;

export const products = async () => {
  const productData = await client.fetch(productQuery);
  return productData;
};