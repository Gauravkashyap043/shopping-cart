import React from 'react'
import DATA from '../Data'

const Product = () => {
  const cardItem = (item) => {
    return (
      <div class="card" style={{width: "18rem"}}>
  <img src={item.image} class="card-img-top" style={{height: "230px"}} alt=""/>
  <div class="card-body">
    <h5 class="card-title">{(item.title.substring(0,12))}</h5>
    <p class="lead">${item.price}</p>
    <a href="#" class="btn btn-primary">Buy Now</a>
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
