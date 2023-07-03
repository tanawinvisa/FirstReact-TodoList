import { gql } from '@apollo/client'

export const GET_USER = gql`
    query ExampleQuery {
    roles {
      data {
        id
        title
        value
      }
      status {
        code
        message
        error
      }
    }
  }
  
`