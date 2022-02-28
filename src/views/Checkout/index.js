import React from "react"
import { useStateValue } from "../../StateProvider"
import CheckoutProduct from "../../components/CheckoutProduct"
import "./checkout.css"

function Checkout() {
  const [{ basket }] = useStateValue()
  return (
    <div className="checkout">
      <div className="checkoutLeft">
        <img
          className="checkoutAd"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your shopping basket is empty</h2>
            <p>
              You have no items in your basket. To buy one or more items, click
              "Add to basket" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkoutTitle">Your shopping basket</h2>
            {basket.map((item, i) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                key={i}
              />
            ))}
          </div>
        )}
      </div>
      <div className="checkoutRight">

      </div>
    </div>
  )
}

export default Checkout
