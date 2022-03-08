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

export const getSecondFeaturedPost = async () => {
  const query = gql`
    query MyQuery {
      posts(where: { featured: true }, first: 1, orderBy: createdAt_DESC) {
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

export const getFirst4HomePosts = async () => {
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

export const getSecond4HomePosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection(
        where: { isFirstPost: false }
        first: 4
        skip: 4
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
      categories(where: { featuredCategory: true }, orderBy: updatedAt_DESC) {
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

export const getCategories = async () => {
  const query = gql`
    query MyQuery {
      categories {
        title
        slug
        categoryImage {
          url
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.categories;
};

export const getCategoryPosts = async (slug) => {
  const query = gql`
    query GetCategoryPosts($slug: String!) {
      postsConnection(
        orderBy: createdAt_DESC
        where: { categories_some: { slug: $slug } }
      ) {
        edges {
          node {
            excerpt
            createdAt
            slug
            title
            featuredImage {
              url
            }
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug });
  return result.postsConnection.edges;
};

export const getCategoryImages = async (slug) => {
  const query = gql`
    query GetCategoryImages($slug: String!) {
      category(where: { slug: $slug }) {
        categoryImage {
          url
        }
        title
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug });
  return result.category;
};
