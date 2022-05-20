import React from 'react'
import { NavLink } from 'react-router-dom'
import DATA from '../Data'

const Product = () => {
  const cardItem = (item) => {
    return (
      <div class="card ms-4 md-4 my-3" style={{width: "18rem"}}>
  <img src={item.image} class="card-img-top" style={{height: "230px"}} alt=""/>
  <div class="card-body">
    <h5 class="card-title">{(item.title.substring(0,12))}</h5>
    <p class="lead">${item.price}</p>
    <NavLink to={`/product/${item.id}`} class="btn btn-outline-primary">Buy Now</NavLink>
  </div>
</div>
    )
  }
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Product</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {DATA.map(cardItem)}
        </div>
      </div>
    </div>
  )
}

export default Product
