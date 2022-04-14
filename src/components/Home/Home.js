import React, { useEffect } from 'react';
import { useState } from 'react';
import CheckOut from '../CheckOut/CheckOut';
import useAuth from './../../hooks/useAuth';
import Products from './../Products/Products';
import './Home.css';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    

    const handleAddProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    // https://web.programming-hero.com/restart2/video/restart2-34-12-cart-state-setup-and-update-cart-state-on-add-to-cart-button-click-
    // https://web.programming-hero.com/restart2/video/restart2-34-13-total-product-price-shipping-cost-tax-and-total-price-
    // https://web.programming-hero.com/update-1/video/update-1-66-8-save-orders-in-a-new-data-collection-in-mongodb
    return (
        <div>
            <div >
                <div className='container my-5 mx-auto row row-cols-1 row-cols-md-3 g-4'>
					{products.map(product => (
						<Products
							key={product._id}
							product={product}
							handleAddProduct={handleAddProduct}
						/>
					))}
				</div>
            </div>
            <div>
                {/* {
                    cart.map(cart => (<CheckOut
                        cart={cart}
                        handleAddProduct={handleAddProduct}
                    />))
                } */}
            </div>
        </div>
    );
};

export default Home;