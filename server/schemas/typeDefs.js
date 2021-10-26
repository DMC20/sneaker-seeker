const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Brand {
        _id: ID
        name: String
    }

    type Product {
        _id: ID
        name: String
        description: String
        image: String
        quantity: Int
        price: Float
        brand: Brand
    }

    type Order {
        _id: ID
        purchaseDate: String
        products: [Product]
    }

    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
        orders: [Order]
    }

    type Checkout {
        session: ID
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        categories: [Brand]
        products(brand: ID, name: String): [Product]
        product(_id: ID!): Product
        user: User
        order(_id: ID!): Order
        checkout(products: [ID]!): Checkout
    }
    
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        updateUser(firstName: String, lastName: String, email: String, password: String): User
        addOrder(products: [ID]!): Order
    }
`;

module.exports = typeDefs;