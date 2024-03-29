import React from "react";
import { Link } from "react-router-dom";

function Coin({
  icon,
  name,
  price,
  priceChange1d,
  priceChange1w,
  websiteUrl,
  id,
}) {
  //id will determine which coin is clicked & that id will be passed as a param
  return (
    <div className='coinData moveUp '>
      <div
        className='coinIcon'
        data-bs-toggle='modal'
        data-bs-target={`#${name.replace(/ /gi, "")}`}>
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

      {/* The Modal */}
      <div className='modal fade' id={`${name.replace(/ /gi, "")}`}>
        <div className='modal-dialog'>
          <div className='modal-content'>
            {/* Modal Header */}
            <div className='modal-header'>
              <h4 className='modal-title'>{name}!</h4>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
              />
            </div>
            {/* Modal body */}
            <div className='modal-body noSelect'>
              <p>
                <span>Name:</span> {name}
              </p>
              <p>
                <span>Price:</span> ${price}
              </p>
              <p>
                <span>Change:</span> {priceChange1d}%
              </p>
              <p>
                <span>Week Change:</span> {priceChange1w}%
              </p>
            </div>
            {/* Modal footer */}
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-outline-dark'
                data-bs-dismiss='modal'>
                Close
              </button>
              <Link
                to={`/coin-details/${id}`}
                type='button'
                className='btn btn-primary'
                target={"_blank"}
                rel='noreferrer'>
                Visit <i class='fa-solid fa-arrow-up-right-from-square'></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coin;
