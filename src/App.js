import styles from "./App.module.css";
import { useEffect, useState } from "react";
import Button from "./Button";

function App() {
  const [loading, setLoading] = useState(true);
  const [coinList, setCoinList] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoinList(json);
        setLoading(false);
      });
  }, []);
  return (
    <div className="App">
      <h1>This is Coin Tracker!({coinList.length})</h1>
      {loading ? <strong>"Loading..."</strong> : null}
      <hr />
      <ul>
        {coinList.map((coin) => {
          return (
            <li key={coin.id}>
              {coin.name}({coin.symbol}) : {coin.quotes.USD.price} USD
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
