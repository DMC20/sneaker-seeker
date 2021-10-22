import React, {useEffect} from 'react';
import {useQuery} from '@apollo/client';
import {useStoreContext} from '../../utils/GlobalState';
import {UPDATE_PRODUCTS} from '../../utils/actions';

import ProductItem from '../ProductItem';
import {QUERY_PRODUCTS} from '../../utils/queries';
// import spinner from '../../assets/spinner.gif';

function ProductList() {

    const [state, dispatch] = useStoreContext();

    const {currentBrand} = state;

    const {loading, data} = useQuery(QUERY_PRODUCTS);

    useEffect(() => {
        if (data) {
            dispatch({type: UPDATE_PRODUCTS, products: data.products});
        }
    }, [data, dispatch]);

    function filterProducts() {
        if (!currentBrand) {
            return state.products;
        }
        return state.products.filter(product => product.brand._id === currentBrand);
    }

    return (<div className="my-2">
        <h2>Products:</h2>
        {state.products.length ? (
                    <div className="flex-row">
                      {filterProducts().map((product) => (
                        <ProductItem
                          key={product._id}
                          _id={product._id}
                          image={product.image}
                          name={product.name}
                          price={product.price}
                          quantity={product.quantity}
                        />
                      ))}
                    </div>
                  ) : (
                    <h3>You haven't added any products yet!</h3>
                  )}
                  {loading ? <h2>Loading</h2> : null}
                </div>
    );
    }

    export default ProductList;
