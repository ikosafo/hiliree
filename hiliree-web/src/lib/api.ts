import { GET_HOMEPAGE_DATA } from "./queries";

const WP_GRAPHQL_URL = process.env.NEXT_PUBLIC_WP_GRAPHQL_URL || 
  "http://hiliree.local/wordpress/graphql";

export async function fetchGraphQL<T = any>(
  query: string,
  variables?: Record<string, unknown>,
  revalidate: number = 60
): Promise<T> {
  const res = await fetch(WP_GRAPHQL_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
    next: { revalidate },
  });
  
  const json = await res.json();
  
  if (json.errors) {
    console.error("GraphQL errors:", json.errors);
    throw new Error(json.errors[0]?.message || "GraphQL error");
  }
  
  return json.data as T;
}

export async function getHomepageData() {
  return fetchGraphQL<{
    page: {
      homePage: {
        hero: {
          titleLine1: string;
          titleLine2: string;
          titleLine3: string;
          subtitle: string;
          boldenedText: string;
          ctaText: string;
          ctaTextTwo: string;
          ctaUrl: string;
          backgroundImage: {
            node: {
              sourceUrl: string;
            };
          };
          floatingCards: {
            card1: {
              icon: string;
              title: string;
              subtitle: string;
              positionClass: string;
            };
            card2: {
              icon: string;
              title: string;
              subtitle: string;
              positionClass: string;
            };
            card3: {
              icon: string;
              title: string;
              subtitle: string;
              positionClass: string;
            };
          };
        };
      };
    };
  }>(GET_HOMEPAGE_DATA);
}