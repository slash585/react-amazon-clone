import React from "react"
import "./product.css"

function Product({ id, title, price, rating, image }) {
  return (
    <div className="product">
      <div className="productInfo">
        <p>{title}</p>
        <p className="productPrice">
          <small>£</small>
          <strong>{price}</strong>
        </p>
        <div className="productRating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐️</p>
            ))}
        </div>
      </div>

      <img alt="" src={image} />
      <button>Add to basket</button>
    </div>
  )
}

export default Product
