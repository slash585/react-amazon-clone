import React from "react"
import "./product.css"
import { useStateValue } from "../../StateProvider"

function Product({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue()
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    })
  }

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
            .map((_, i) => (
              <p key={i}>⭐️</p>
            ))}
        </div>
      </div>

      <img alt="" src={image} />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  )
}

export default Product
