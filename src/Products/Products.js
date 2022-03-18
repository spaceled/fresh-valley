import React from 'react';
import './Products.css';

// https://web.programming-hero.com/update-1/video/update-1-57-5-login-form-field-validation-using-regular-expression-show-error

const Products = ({ product }) => {
  console.log(product)

  return (

    // <CardGroup className="col-md-4 g-4 mb-4">
    //   <Card style={{ width: '20rem'}} className="shadow p-3 mb-5 bg-white">
    //     <Card.Img variant="top" className="rounded img-thumbnail"height="300px" src={product.imageURL} />
    //     <Card.Body>
    //       <Card.Title>{product.name} - {product.weight}</Card.Title>
    //       {/* <Card.Text>

    //       </Card.Text> */}
    //     </Card.Body>
    //     <Row className="mb-4" >
    //       <Col md={4}><h1>${product.price}</h1></Col>
    //       <Col md={{ span: 4, offset: 4 }}>
    //         <Button variant="primary">Buy Now</Button>
    //       </Col>
    //     </Row>
    //   </Card>
    // </CardGroup>
    // <div className="card-group col-md-4 g-4 mb-4">
    //   <div className="card shadow p-3 mb-5 bg-white">
    //     <img style={{height: '50%', width: '50%'}} src={product.imageURL} className="card-img-top" alt="..." />
    //     <div className="card-body">
    //       <h5 className="card-title">{product.name} - {product.weight}</h5>
    //       <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    //     </div>
    //     <div>
    //       <div className="float-start">
    //         <h1>${product.price}</h1>
    //       </div>
    //       <div className="float-end">
    //         <button type="button" class="btn btn-primary">Buy Now</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div class="card col-md-3">
      <img src={product.imageURL} alt="Avatar" style={{ width: "100%", height: "50%" }} />
      <div class="container">
        <h4><b>{product.name}</b></h4>
        <p>${product.price}</p>
      </div>
      <button class="button button1">Buy Now</button>
    </div>
  );
};

export default Products;