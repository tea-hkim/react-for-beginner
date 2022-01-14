import styles from "./App.module.css";
import { useEffect, useState } from "react";
import Button from "./Button";

function App() {
  const [loading, setLoading] = useState(true);
  const [coinList, setCoinList] = useState([]);
  const [dollar, setDollar] = useState("");
  const handleDollarChange = (event) => {
    const {
      target: { value },
    } = event;
    setDollar(value);
  };

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
      <input
        value={dollar}
        onChange={handleDollarChange}
        type="number"
        placeholder=""
      />
      <h2>
        You can get {coinList[0] ? dollar / coinList[0].quotes.USD.price : null}
        BTC for {dollar}dollars
      </h2>
      <br />
      <select>
        {coinList.map((coin) => {
          return (
            <option key={coin.id}>
              {coin.name}({coin.symbol}) : {coin.quotes.USD.price} USD
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default App;
