import React from "react";
import ProductList from "../ProductList";
import Cart from '../Cart';

const Home = () => {

    return (
        <div>
            <h1>This is the home page </h1>
            <ProductList />
            <Cart />
        </div>
    )
};

export default Home;