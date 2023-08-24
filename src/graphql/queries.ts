import { gql } from 'graphql-request'

export const GET_PAGES = gql`
  query Pages {
    pages {
      heading
      id
      slug
      body {
        html
      }
    }
  }
`
