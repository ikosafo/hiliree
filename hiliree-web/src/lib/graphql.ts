import { GraphQLClient } from "graphql-request";

const GRAPHQL_URL = process.env.NEXT_PUBLIC_WP_GRAPHQL_URL || "http://hiliree.local/wordpress/graphql";

export const graphqlClient = new GraphQLClient(GRAPHQL_URL, {
  headers: { "Content-Type": "application/json" },
});

export async function fetchGraphQL<T = unknown>(
  query: string, variables?: Record<string, unknown>, revalidate?: number
): Promise<T> {
  const res = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: revalidate ?? 60 },
  });
  if (!res.ok) throw new Error(`GraphQL request failed: ${res.statusText}`);
  const json = await res.json();
  if (json.errors) throw new Error(json.errors[0]?.message || "GraphQL error");
  return json.data as T;
}
