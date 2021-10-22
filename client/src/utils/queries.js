
import gql from 'graphql-tag';

export const QUERY_USER = gql`
{
    user {
        firstName
        lastName
        orders {
            _id
            purchaseDate
            products {
                _id
                name
                description
                price
                quantity
                image
            }
        }
    }
}
`;

import { gql } from 'graphql-tag';

export const QUERY_ME = gql `
{
    query {
       products
       product
       user
       order
       checkout
       brands {
           _id
           name
       }
}`;

