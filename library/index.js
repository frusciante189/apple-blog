import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getFirstFeaturedPost = async () => {
  const query = gql`
    query MyQuery {
      posts(where: { isFirstPost: true }, first: 1) {
        excerpt
        createdAt
        title
        slug
        featuredImage {
          url
        }
        categories {
          title
          slug
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.posts[0];
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetail($slug: String!) {
      post(where: { slug: $slug }) {
        content {
          html
        }
        createdAt
        postExcerpt
        slug
        title
        featuredImage {
          url
        }
        categories {
          title
          slug
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug });
  return result.post;
};

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            title
            slug
            postExcerpt
            featuredImage {
              url
            }
            excerpt
            content {
              html
            }
            categories {
              title
              slug
            }
            createdAt
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.postsConnection.edges;
};
