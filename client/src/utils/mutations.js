import { gql } from 'graphql-tag';

export const LOGIN = gql `
    mutation loginUser($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token 
            user {
                _id
                email
            }
        }
    }
`;

export const ADD_USER = gql`
  mutation addUser($firstName: String! $lastName: String! $email: String! $password: String!) {
    addUser(firstName: $firstName lastName: $lastName email: $email password: $password) {
      token
      user {
        _id
      }
    }
  }
`;
