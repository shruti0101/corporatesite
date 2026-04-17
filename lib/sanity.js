import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "uxyf2zll",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});
