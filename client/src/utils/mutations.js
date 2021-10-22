
import gql from 'graphql-tag';

export const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token

import { gql } from 'graphql-tag';

export const LOGIN = gql `
    mutation loginUser($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token 

            user {
                _id
            }
        }
    }
`;


export const ADD_USER = gql`
    mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
        addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
            token
            user {
                _id
            }
        }
    }
`;

export const ADD_USER = gql `
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token 
            user {
                _id
                firstName
                lastName
                email
                orders {
                    _id
                    purchaseDate
                }
            }
        }
    }`

