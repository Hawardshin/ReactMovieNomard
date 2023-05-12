
import {useState, useEffect} from "react";
function App() {
  const [loading,setLoading] = useState(true);
  const [coins,setCoins] = useState([]);
  const [userDollar, setUserDollar] = useState(0);

  const onChange = (event)=>{
    event.preventDefault();
    setUserDollar(event.target.value);
  };
  useEffect (()=>{
    fetch ("https://api.coinpaprika.com/v1/tickers")
    .then((response)=>response.json())
    .then((json)=>{
      setCoins(json);
      setLoading(false);
    });
  },[]);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(number of coins : ${coins.length})`}</h1>
      <div>
        {/* <form onSubmit={onChange}> */}
        <label htmlFor="dollar"><strong>input your dollar :</strong></label>
        <input
          id = "dollar"
          placeholder='input your USD'
          type="number"
          value = {userDollar}
          onChange={onChange}
        />
         {/* <button>convert to coin</button> */}
        {/* </form> */}
      </div>
      <h3>{userDollar <= 0 ? "Each coin per dollar" :`The value of your ${userDollar}$ in coins` }</h3>
      {loading ? <strong>Loading....</strong> :
        userDollar <= 0 ?  <select>
        {coins.map((coin)=>(
        <option key={coin.rank}>
          {coin.name} ({coin.symbol}) : {coin.quotes.USD.price}
        </option>
        ))}
      </select>
        :<select>
        {coins.map((coin)=>(
        <option key={coin.rank}>
          {coin.name} ({coin.symbol}) : {userDollar *  1 /coin.quotes.USD.price}
        </option>
        ))}
      </select>}
    </div>
  );
}

export default App;
