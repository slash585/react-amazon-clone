import React from "react"
import { Link } from "react-router-dom"
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import "./header.css"
import { useStateValue } from "../../StateProvider"

function Header() {
  const [{ basket }] = useStateValue()

  return (
    <nav className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
          className="headerLogo"
        />
      </Link>

      <div className="headerSearch">
        <input type="text" className="headerSearchInput" />
        <SearchIcon className="headerSearchIcon" />
      </div>

      <div className="headerNav">
        <Link to="/login" className="headerLink">
          <div className="headerOption">
            <span className="headerOptionLineOne">Hello Mehmet</span>
            <span className="headerOptionLineTwo">Sign in</span>
          </div>
        </Link>

        <Link to="" className="headerLink">
          <div className="headerOption">
            <span className="headerOptionLineOne">Return</span>
            <span className="headerOptionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="" className="headerLink">
          <div className="headerOption">
            <span className="headerOptionLineOne">Your</span>
            <span className="headerOptionLineTwo">Prime</span>
          </div>
        </Link>
      </div>

      <Link to="/checkout" className="headerLink">
        <div className="headerOptionBasket">
          <ShoppingBasketIcon />
          <span className="headerOptionLineTwo headerBasketCount">
            {basket?.length}
          </span>
        </div>
      </Link>
    </nav>
  )
}

export default Header
