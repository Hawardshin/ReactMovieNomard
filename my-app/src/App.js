
import {useState, useEffect} from "react";
function App() {
  const [loading,setLoading] = useState(true);
  const [coins,setCoins] = useState([]);
  const [userDollar, setUserDollar] = useState(-1);

  const submitDollar = (event)=>{
    event.preventDefault();
  // if (event.target.value < 0)
  //   return;
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
  useEffect( setUserDollar
  ,[userDollar]);

  return (
    <div>
      <h1>The Coins!{loading ? "" : `(${coins.length})`}</h1>
      <div>
        <form onSubmit={submitDollar}>
        <label htmlFor="dollar"><strong>input your dollar :</strong></label>
        <input
          id = "dollar"
          placeholder='input your USD'
          type="number"
        />
         <button>See in coin</button>
        </form>
      </div>
      <h3>{userDollar < 0 ? "" :`Your Money is ${userDollar} $` }</h3>
      {loading ? <strong>Loading....</strong> : <select>
        {coins.map((coin)=>(
        <option key={coin.rank}>
          {coin.name} ({coin.symbol}) : {coin.quotes.USD.price}
        </option>
        ))}
      </select>}

    </div>
  );
}

export default App;
