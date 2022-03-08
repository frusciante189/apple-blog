import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getFirstFeaturedPost = async () => {
  const query = gql`
    query MyQuery {
      posts(where: { isFirstPost: true }, first: 1, orderBy: createdAt_DESC) {
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
        excerpt
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

export const getHomePosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection(
        where: { featured: false, isFirstPost: false }
        first: 4
        orderBy: createdAt_DESC
      ) {
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

export const getFeaturedCategories = async () => {
  const query = gql`
    query MyQuery {
      categories(where: { featuredCategory: true }) {
        categoryImage {
          url
        }
        createdAt
        slug
        title
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.categories;
};
