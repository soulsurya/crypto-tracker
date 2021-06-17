
import React, {useEffect, useState} from "react";
import Header from "./Header";
import Search from "./Search";
import axios from "axios";
import Coin from "./Coin";
import CoinTitle from "./CoinTitle";

function App() {
 const [coins, setCoins]= useState([]);
 const [search, setSearch]= useState('');


  useEffect(()=>{
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res=>{
      setCoins(res.data);
      console.log(res.data);
    })
    .catch(err=>console.log(err))
  }, []);

  const handleChange= e =>{
    setSearch(e.target.value);
    };
    
    const filteredCoins = coins.filter( coin=> coin.name.toLowerCase().includes(search.toLowerCase()));
    
  return (
    <div className='bg-gray-900 min-h-screen text-gray-200 relative'>
      <Header />
      <Search handleChange={handleChange}/>
      <CoinTitle/>
      {filteredCoins.map(coin=>{
        return (
          <Coin
          key= {coin.id}
          name={coin.name}
          image={coin.image}
          symbol={coin.symbol}
          volume={coin.total_volume}
          price={coin.current_price}
          priceChange={coin.price_change_percentage_24h}
          marketcap={coin.market_cap}
          />
        )
      }) }
<footer className='pb-8 mt-20 text-center font-medium'>
Deigned By : <a href="https://suryakant.netlify.app/"> Suryakant Chandrakar</a>
</footer>
      </div>
  );
}

export default App;
