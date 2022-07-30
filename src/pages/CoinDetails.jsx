import React from "react";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Globalcontext } from "../App";
import Header from "../components/Header";

function CoinDetails() {
  const { id } = useParams();
  const { listOfCoin } = useContext(Globalcontext);

  if (listOfCoin.length) {
    return (
      <div className='noSelect'>
        <Header />
        <div className='mainSection pushDown100'>
          <Link
            className='fancyButton pushDown100'
            style={{ fontSize: "50px" }}
            to={`/`}>
            <i class='fa-solid fa-arrow-left'></i> Back
          </Link>
        </div>
        <div className='mainSection pushDown100'>
          <img src={listOfCoin[id].icon} alt='coin' className='img-fluid' />
        </div>
        <div className='mainSection'>
          <p>
            <span>{listOfCoin[id].name}</span>
            {listOfCoin[id].name}
          </p>
        </div>
      </div>
    );
  }
}

export default CoinDetails;
