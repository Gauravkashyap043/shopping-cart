import React from 'react'
import { useParams } from 'react-router';
import DATA from "../Data"

const ProductDetails = () => {
    const proId = useParams();
    const proDetails = DATA.filter(x=>x.id ==proId.id);
    const product = proDetails[0]
    console.log(product)
  return (
    <>
    <div className="container my-5 py-3">
        <div className="row">
            <div className="col-md-6 d-flex justify-content-center mx-auto">
                <img src={product.image} alt={product.title} height="400px" width="400px" />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
                <h1 className="display-6 fw-bold">{product.title}</h1>
                <hr />
                
                <h2 className="my-4">Price: ${product.price}</h2>
                <p className='lead'>{product.description}</p>
                <button className="btn btn-outline-primary">Add to Cart</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProductDetails;