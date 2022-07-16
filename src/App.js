import "./App.css";
import Axios from "axios";
import Coin from "./pages/Coin";
import Header from "./components/Header";
import { useEffect, useState } from "react";

function float2int(value) {
  return value | 0;
}

function App() {
  const [listOfCoin, setListOfCoins] = useState([]);
  const [searchWord, setSearchWord] = useState("")

  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(
      (Response) => {
        setListOfCoins(Response.data.coins)
      }
    )
  }, [])

  const filteredCoins = listOfCoin.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  })

  return (
    <div className='noSelect'>
      <Header />
      <div className='sBar'>
        <input type="text" placeholder='Search for Crypto' onChange={(event) => {
          setSearchWord(event.target.value);
        }}
        />
      </div>
      <div className='cData'>
        {filteredCoins.map((coin) => {
          return (
            <Coin
              key={coin.name}
              name={coin.name}
              icon={coin.icon}
              price={float2int(coin.price)}
              priceChange1d={coin.priceChange1d}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
