import "./App.css";
import Axios from "axios";
import CoinDetails from "./pages/CoinDetails";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import { createContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export const Globalcontext = createContext(null);
function App() {
  const [listOfCoin, setListOfCoins] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(
      (Response) => {
        setListOfCoins(Response.data.coins);
      }
    );
  }, []);

  const filteredCoins = listOfCoin.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  });

  //this is a context which will be available globally any page or component can consume it
  const context_to_be_provided = { filteredCoins, setSearchWord, listOfCoin };

  return (
    <Globalcontext.Provider value={context_to_be_provided}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/coin-details/:id' element={<CoinDetails />}></Route>
        </Routes>
      </Router>
    </Globalcontext.Provider>
  );
}

export default App;
