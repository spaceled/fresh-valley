import React from 'react';
import useAuth from './../../hooks/useAuth';
import { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

const CheckOut = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const [product, setProduct] = useState({});
    // const user = JSON.parse(localStorage.getItem("user"));
    
    const [cartProducts, setCartProducts] = useState({
        userName: user.name,
        email: user.email,
        productName: product.name,
        img: product.img,
        productPrice: product.price,

    });
    
    const location = useLocation();
    const navigate = useNavigate();
    const redirect_uri = location.state?.from || '/';
    

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:5000/checkout", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cartProducts)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                alert("You ordered successfully!");
                navigate(redirect_uri);
            });
    };


    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log('Data', data);
                setProduct(data);
                const newCheckoutData = { ...cartProducts };
                newCheckoutData.productName = data.name;
                newCheckoutData.productPrice = data.price;
                newCheckoutData.img = data.img;
                setCartProducts(newCheckoutData);
            })
    }, []);

    // const total = cart.reduce((acc, item) => acc + item.price, 0);


    // prothom e onSubmit function a formData diye image ar url ta anen. imag er url asar por sei then er vitore apnar product ar baki infogulo jekhane sei function ke call korben taholey hobe . image load howar por function ke call korben

    // assignment 10 home page a buy now te click kore checkout page data kemne show korbo? route params diye single akta data show kora jay. but multiple data kemne dekabo? photo te data gula table akare dekanu hoysilo.

    // https://web.programming-hero.com/update-1/video/update-1-66-8-save-orders-in-a-new-data-collection-in-mongodb
    return (

        <div style={{ width: "60%", top: "50%", left: "50%" }} className="container ">
            <h2> Checkout</h2>
            <div className="shadow rounded ">
                <form onSubmit={handleSubmit}>

                    <div className="d-flex justify-content-around pt-3">
                        <h2>Product Name: <span>{product.name}</span> </h2>
                        <h5>Quantity: 1</h5>

                        <h6>price: <span>$</span> {product.price}</h6>
                    </div>
                    <button className="btn btn-success m-5  ">checkout</button>

                </form>
                <div className="d-flex justify-content-center">
                </div>

            </div>
        </div>
    );
};

export default CheckOut;