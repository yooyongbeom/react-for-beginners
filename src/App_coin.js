import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [coin, setCoin] = useState({});
  const [dollars, setDollars] = useState(0);

  const onChange = (evt) => {
    setDollars(evt.target.value);
  };
  const onClick = (evt) => {
    //console.log(evt);

    if (dollars > 0) {
      alert(`${coin.name} : ${dollars / coin.quotes.USD.price} coin`);
    } else {
      alert("달러 입력해");
    }
  };

  const getCoin = (id) => {
    return coins.find((coin) => coin.id === id);
  };

  const selectChange = (evt) => {
    const id = evt.target.value;
    //console.log(id);
    //console.log(setCoin(getCoin(id)));
    setCoin(getCoin(id));
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res) => res.json())
      .then((json) => {
        setCoins(json);
        setCoin(json[0]);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <div>
            <select onChange={selectChange}>
              {coins.map((coin, idx) => (
                <option key={coin.id} value={coin.id}>
                  {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
                </option>
              ))}
            </select>
          </div>
          <div height="100">&nbsp;</div>
          <div>
            <label htmlFor="dollars">{`달러 -> 코인 변환`}</label>
            &nbsp; $
            <input
              id="dollars"
              type="number"
              placeholder="달러를 입력하세요."
              onChange={onChange}
              value={dollars}
            />
            &nbsp;
            <button onClick={onClick}>click me</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
