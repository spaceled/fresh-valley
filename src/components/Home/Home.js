import React, { useEffect } from 'react';
import { useState } from 'react';
import Products from '../../Products/Products';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className="row">
            <h1>This is Home</h1>
            {
                products.map(product => <Products product={product}/>)
            }
        </div>
    );
};

export default Home;