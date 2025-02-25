import React, { useCallback, useContext } from "react";
import "./Navbar.css";
import logoo from "../../assets/logo.png";
import arrow from "../../assets/arrow_icon.png";
import { CoinContext } from "../../Context/CoinContext";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }
      case "inr": {
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      }
      default: {
        setCurrency({ name: "usd", symbol: "$" });
      }
    }
    // yaha pr value change hoga to through set currency context me jaake
    // vaha pr bhi value change krega or use effect me jo
    // currency dala h jb currency change hogi tb vo useeffect call hoga
    //coin context pr dekhe
  };

  return (
    <div className="navbar">
      <Link to={'/'}>
        <img src={logoo} alt="logo" className="logo" />
      </Link>
      <ul>
      <Link to={'/'}><li>Home</li></Link>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <button>
          Sign up <img src={arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
