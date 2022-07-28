import React from "react";
import { Link } from "react-router-dom";

function Coin({ icon, name, price, priceChange1d, priceChange1w, websiteUrl, id }) { //id will determine which coin is clicked & that id will be passed as a param
  return (
    <Link to={`/coin-details/${id}`}>
      <div className='coinData'>
        <div
          className='coinIcon'
        >
          <img src={icon} alt={icon} draggable={false} />
          <p>
            <span>Name:</span> {name}
          </p>
          <p>
            <span>Price:</span> ${price}
          </p>
          <p>
            <span>Change:</span> {priceChange1d}%
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Coin;
