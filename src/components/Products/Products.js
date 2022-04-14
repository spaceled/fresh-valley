import React from 'react';
// import './Products.css';
import useAuth from './../../hooks/useAuth';
import { Link } from 'react-router-dom';


const Products = (props) => {
  const {user, signInUsingGoogle} = useAuth();
  const {_id, imageURL, name, price } = props.product;
  return (
    // <div className='col'>
    //   <div className="card h-100 shadow border-0 py-4">
    //   <img src={ imageURL } alt="Avatar" className="card-img-top h-75 w-50 d-block mx-auto text-dark" style={{ width: "100%", height: "50%" }} />
    //   <div className="container">
    //     <h4><b>{ name}</b></h4>
    //     <p>${ price}</p>
    //   </div>
      
    //   {/* {<button onClick={() => props.handleAddProduct(props.product)} className="button button1">Buy Now</button>} */}
    //   {user.email ? 
    //   <button onClick={() => props.handleAddProduct(props.product)} className="btn-success px-2 py-1 text-white border-0  rounded">Buy Now</button> : 
    //   <button onClick={signInUsingGoogle} className="btn-success px-2 py-1 text-white border-0  rounded">Buy Now</button>}
    // </div>
    <div className='col'>
			<div className='card h-100 shadow border-0 py-4'>
				<img
					src={imageURL}
					className='card-img-top h-75 w-50 d-block mx-auto text-dark'
					alt={name}
				/>
				<div className='card-body'>
					<h5 className='card-title text-dark py-2 fw-bold'>{name}</h5>
					<div className='d-flex align-items-center justify-content-between'>
						<h4 className='text-success fw-bold'>
							<span className='fw-bolder me-1'> $ </span>
							{price}
						</h4>
						{user.email ? 
              // <button onClick={() => props.handleAddProduct(props.product)} className="btn-success px-2 py-1 text-white border-0  rounded">Buy Now</button> : 
              // <button onClick={signInUsingGoogle} className="btn-success px-2 py-1 text-white border-0  rounded">Buy Now</button>}

              <Link to ={`/checkout/${_id}`}> <button onClick={() => props.handleAddProduct(props.product)} className="btn-success px-2 py-1 text-white border-0  rounded"> Buy Now</button></Link> :

              <Link to ={`/checkout/${_id}`}> <button onClick={signInUsingGoogle} className="btn-success px-2 py-1 text-white border-0  rounded"> Buy Now</button></Link>}
					</div>
				</div>
			</div>
		</div>
  );
};

export default Products;