import Coin from "./../components/Coin";
import Header from "./../components/Header";
import React, { useContext } from "react";
import { Globalcontext } from "../App.js";

function float2int(value) {
    return value | 0;
}


function Home() {

    const { filteredCoins, setSearchWord } = useContext(Globalcontext);

    return (
        <div className='noSelect'>
            <Header />
            <div className='sBar'>
                <input
                    type='text'
                    placeholder='Search for Crypto'
                    onChange={(event) => {
                        setSearchWord(event.target.value);
                    }}
                />
            </div>
            <div className='cData'>
                {filteredCoins.map((coin, index) => {
                    return (
                        <Coin
                            key={coin.rank}
                            name={coin.name}
                            icon={coin.icon}
                            price={float2int(coin.price)}
                            priceChange1d={coin.priceChange1d}
                            priceChange1w={coin.priceChange1w}
                            websiteUrl={coin.websiteUrl}
                            id={index}
                        />
                    );
                })}
            </div>
        </div>
    )
}

export default Home