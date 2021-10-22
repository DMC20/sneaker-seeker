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