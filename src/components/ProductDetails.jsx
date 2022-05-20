import React,{useState} from 'react'
import { useParams } from 'react-router';
import DATA from "../Data"

const ProductDetails = () => {
    const [cartBtn,setCartBtn] = useState("Add to Cart")
    const proId = useParams();
    const proDetails = DATA.filter(x=>x.id ==proId.id);
    const product = proDetails[0]
    console.log(product)

    const handleCart = (product) => {
        if(cartBtn === "Add to Cart") {
            setCartBtn("Remove from Cart")
        } else{
            setCartBtn("Add to Cart")
        }
    }

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
                <button onClick={()=>handleCart(product)} className="btn btn-outline-primary">{cartBtn}</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProductDetails;