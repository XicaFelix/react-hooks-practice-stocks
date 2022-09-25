import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks]= useState([])
  const [myPortfolio, setMyPortfolio]= useState([])
  const [sortBy, setSortBy] = useState('Alphabetically')
  const [filterBy, setFilterBy]= useState('Tech')

  useEffect(()=>{
    fetch('http://localhost:3001/stocks').then(resp=> resp.json())
    .then(result=> {setStocks(result)})
  },[])

  function buySellStock(selectedStock){
    if(myPortfolio.includes(selectedStock)){
      setMyPortfolio(myPortfolio.filter((stock)=> stock.id !==selectedStock.id))
    }else{
      setMyPortfolio([...myPortfolio, selectedStock]);
    }
    return myPortfolio;
  }

  const sortedStocks = [...stocks].sort((a,b)=>{
    if(sortBy==='Alphabetically'){
      const aName = a.name;
      const bName = b.name;
      if(aName > bName){ 
      return 1
      }else{
        return -1
      }
    }else{
      const aPrice = a.price;
      const bPrice = b.price;
      if(aPrice> bPrice){
        return 1
      }else{
        return -1
      }
    }
  })
  const filteredStocks = [...sortedStocks].filter((stock)=> stock.type===filterBy)

  return (
    <div>
      <SearchBar sortBy={sortBy} onSortBy={setSortBy} filterBy={filterBy} onFilter={setFilterBy}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stockList={filteredStocks} onBuySellStock={buySellStock}/>
        </div>
        <div className="col-4">
          <PortfolioContainer stockList={myPortfolio} onBuySellStock={buySellStock}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
