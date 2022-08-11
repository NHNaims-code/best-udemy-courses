import { request, gql } from 'graphql-request'
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              photo {
                url
              }
              name
              slug
            }
            slug
            title
            subCategory
            thumbnail {
              url
            }
            subCategoryAccent {
              hex
            }
            categories {
              name
              slug
              accent {
                hex
              }
            }
            lesson
            reviews
          }
        }
      }
    }
  `

  const result = await request(graphqlAPI, query)
  console.log(result)
  return result.postsConnection.edges
}
export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug}){
     
        author {
          facebook
          name
          linkedIn
          photo {
            url
          }
            slug
            totalReviews
            totalStudents
            twitter
            website
            youtube
          }
        categories {
          name
          slug
        }
        content {
          html
        }
        excerpt
        lesson
        reviews
        thumbnail {
          url
        }
        title
      }
    }
  `

  const result = await request(graphqlAPI, query, {slug})
  return result.post
}